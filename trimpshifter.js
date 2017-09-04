var _ts_enabled = true,
    _ts_gameLoopId,
    _ts_gameLoopInterval = 1000,
    _ts_i = 0,
    _ts_version = '1.0.4'
    ;



setTimeout(Startup, 2000);

function Startup() {
    gameLoopId = setInterval(MainLoop, _ts_gameLoopInterval);
    console.log('TrimpShifter v.' + _ts_version);
}

function MainLoop() {
    if (!_ts_enabled) {
        clearInterval(_ts_gameLoopId);
        return;
    }

    var result = false;
    numTab(1);
    //game.resources.food.owned
    //game.resources.food.max


    if ((game.resources.food.owned / game.resources.food.max) > 0.75) {
        _ts_BuyBuilding('Barn');
    }

    if ((game.resources.wood.owned / game.resources.wood.max) > 0.75) {
        _ts_BuyBuilding('Shed');
    }

    if ((game.resources.metal.owned / game.resources.metal.max) > 0.75) {
        _ts_BuyBuilding('Forge');
    }

    var priorityUpgrades = ['Anger', 'Battle', 'Bloodlust', 'Bounty', 'Coordination', 'Efficiency', 'Egg', 'Explorers', 'Gymystic', 'Miners', 'Potency', 'Scientists', 'Speedfarming', 'Speedlumber', 'Speedminer', 'Speedscience', 'TrainTacular', 'Trainers', 'UberHotel', 'UberHouse', 'UberHut', 'UberMansion', 'UberResort'],
        hasPriority = false;


    for (var i = 0; i < priorityUpgrades.length; i++) {
        if (game.upgrades[priorityUpgrades[i]].locked == 0) {

            result = _ts_BuyUpgrade(priorityUpgrades[i]);

            if (!result) {

                hasPriority = true;
            }

        }
    }


    if (game.workspaces > 0) {

        if (game.jobs.Trainer.locked == 0) {
            result = true;
            while (result) {
                result = _ts_BuyJob('Trainer');
            }
        }


        if (game.jobs.Explorer.locked == 0) {
            result = true;
            while (result && game.jobs.Explorer.owned < 50) {
                result = _ts_BuyJob('Explorer');
            }
        }
        
        var sciRatio = (game.jobs.Farmer.owned + game.jobs.Lumberjack.owned + game.jobs.Miner.owned) / game.jobs.Scientist.owned;

        if (sciRatio > 25) {
            buyJob('Scientist');
            
        }

        if (game.jobs.Miner.owned < game.jobs.Lumberjack.owned)
            _ts_BuyJob('Miner');
        else if (game.jobs.Lumberjack < game.jobs.Farmer.owned)
            _ts_BuyJob('Lumberjack');
        else
            _ts_BuyJob('Farmer');

    }


}



function _ts_BuyJob(what) {
    var result = buyJob(what);
    if (result)
        console.log('TrimpShifter - buying job ' + what);
    return result;
}

function _ts_BuyBuilding(what) {
    var result = buyBuilding(what);
    if (result)
        console.log('TrimpShifter - buying building ' + what);
    return result;
}

function _ts_BuyUpgrade(what) {
    var result = buyUpgrade(what);
    if (result)
        console.log('TrimpShifter - buying upgrade ' + what);
    return result;
}

function _ts_BuyEquipment(what) {
    var result = buyEquipment(what);
    if (result)
        console.log('TrimpShifter - buying equipment ' + what);
    return result;
}