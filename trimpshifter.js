var _ts_enabled = true,
    _ts_gameLoopId,
    _ts_gameLoopInterval = 250,
    _ts_i = 0,
    _ts_version = '1.0.18',
    _ts_lastGathered = 'food',
    _ts_logEnabled=true
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

    //set buys to 1
    numTab(1);
    //game.resources.food.max*(1+(game.portal.Packrat.modifier*game.portal.Packrat.level))

    //check storage
    if ((game.resources.food.owned / (game.resources.food.max * (1 + (game.portal.Packrat.modifier * game.portal.Packrat.level)))) > 0.5) {
        _ts_BuyBuilding('Barn');
    }

    if ((game.resources.wood.owned / (game.resources.wood.max * (1 + (game.portal.Packrat.modifier * game.portal.Packrat.level)))) > 0.5) {
        _ts_BuyBuilding('Shed');
    }

    if ((game.resources.metal.owned / (game.resources.metal.max * (1 + (game.portal.Packrat.modifier * game.portal.Packrat.level)))) > 0.5) {
        _ts_BuyBuilding('Forge');
    }


    //buy jobs
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

        if (sciRatio > 20) {
            _ts_BuyJob('Scientist');

        }

        if (game.jobs.Miner.locked == 0 && game.jobs.Miner.owned < game.jobs.Lumberjack.owned)
            _ts_BuyJob('Miner');
        if (game.jobs.Lumberjack.locked == 0 && game.jobs.Lumberjack.owned < game.jobs.Farmer.owned)
            _ts_BuyJob('Lumberjack');
        if (game.jobs.Farmer.locked == 0)
            _ts_BuyJob('Farmer');

    }




    //high priority upgrades, will wait to upupgrade these first
    var priorityUpgrades = ['Anger', 'Battle', 'Blockmaster', 'Bloodlust', 'Bounty', 'Coordination', 'Efficiency', 'Egg', 'Explorers', 'Gymystic', 'Miners', 'Potency', 'Scientists', 'Speedfarming', 'Speedlumber', 'Speedminer', 'Speedscience', 'TrainTacular', 'Trainers', 'Trapstorm', 'UberHotel', 'UberHouse', 'UberHut', 'UberMansion', 'UberResort'],
        hasPriority = false;


    for (var i = 0; i < priorityUpgrades.length; i++) {
        if (game.upgrades[priorityUpgrades[i]].locked == 0) {

            result = _ts_BuyUpgrade(priorityUpgrades[i]);

            if (!result) {

                hasPriority = true;
            }

        }
    }


    //if (hasPriority)
     //   return;

    //buy non-priority upgrades
    var upgrades = [
        'Dagadder',
        'Megamace',
        'Axeidic',
        'Polierarm',
        'Greatersword',

        'Bootboost',
        'Hellishmet',
        'Pantastic',
        'Bestplate',
        'Smoldershoulder',

        'Supershield',
    ];

    for (var i = 0; i < upgrades.length; i++) {
        if (game.upgrades[upgrades[i]].locked == 0)
            _ts_BuyUpgrade(upgrades[i]);
    }




    //level up equipment
    var weapons = ['Dagger', 'Mace', 'Battleaxe', 'Polearm', 'Greatsword'],
        armor = ['Boots', 'Helmet', 'Pants', 'Breastplate', 'Shoulderguards'];



    for (var i = 0; i < weapons.length; i++) {

        if (game.equipment[weapons[i]].locked == 0) {
            result = true;
            while (result && game.equipment[weapons[i]].level < 9)
                result = _ts_BuyEquipment(weapons[i]);
        }
    }

    for (var i = 0; i < armor.length; i++) {

        if (game.equipment[armor[i]].locked == 0) {
            result = true;
            while (result && game.equipment[armor[i]].level < 11)
                result = _ts_BuyEquipment(armor[i]);
        }
    }

    if (game.equipment.Shield.locked == 0) {
        result = true;
        while (result && game.equipment.Shield.level < 5)
            result = _ts_BuyEquipment('Shield');
    }










    //level up buildings
    var buildings = ['Gym', 'Nursery', 'Tribute', 'Wormhole', 'Gateway', 'Resort', 'Hotel', 'Mansion', 'House', 'Hut'];

    for (var i = 0; i < buildings.length; i++) {
        if (game.buildings[buildings[i]].locked == 0) {
            result = true;
            while (result) {
                result = _ts_BuyBuilding(buildings[i]);
            }
        }
    }

    if (game.global.buildingsQueue.length > 0 && game.global.playerGathering != 'buildings') {
        _ts_lastGathered = game.global.playerGathering;

        setGather('buildings');
    }
    else if (game.global.buildingsQueue.length == 0 && game.global.playerGathering == 'buildings') {
        setGather(_ts_lastGathered);
    }

}









function _ts_BuyJob(what) {
    var result = buyJob(what, true, true);
    if (result && _ts_logEnabled)
        console.log('TrimpShifter - buying job ' + what);
    return result;
}

function _ts_BuyBuilding(what) {
    var result = buyBuilding(what, true, true);
    if (result && _ts_logEnabled)
        console.log('TrimpShifter - buying building ' + what);
    return result;
}

function _ts_BuyUpgrade(what) {
    var result = buyUpgrade(what, true, true);
    if (result && _ts_logEnabled)
        console.log('TrimpShifter - buying upgrade ' + what);

    return result;
}


function _ts_BuyEquipment(what) {
    var canBuy = false;

    if (what == 'Shield') {
        if (_ts_GetEquipmentCost('Shield') <= game.resources.wood.owned)
            canBuy = true;
    }
    else {
        if (_ts_GetEquipmentCost(what) <= game.resources.metal.owned)
            canbuy = true;
    }


    if (canBuy) {
        buyEquipment(what, null, true);

        if (_ts_logEnabled)
            console.log('TrimpShifter - buying equipment ' + what);
    }
    return canBuy;
}


function _ts_GetEquipmentCost(what) {
    if (what == 'Shield') {
        return (game.equipment["Shield"].cost.wood[0] * Math.pow(game.equipment["Shield"].cost.wood[1], game.equipment["Shield"].level)) * Math.pow(0.95, game.portal.Artisanistry.level);
    }
    else {
        return (game.equipment[what].cost.metal[0] * Math.pow(game.equipment[what].cost.metal[1], game.equipment[what].level)) * Math.pow(0.95, game.portal.Artisanistry.level);
    }
}