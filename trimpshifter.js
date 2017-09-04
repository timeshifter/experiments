var _ts_enabled = true,
    _ts_gameLoopId,
    _ts_gameLoopInterval = 1000,
    _ts_i = 0,
    _ts_version = '1.0.2'
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

    //game.resources.food.owned
    //game.resources.food.max


    if ((game.resources.food.owned / game.resources.food.max) > 0.75) {
        buyBuilding('Farm');
    }

    if ((game.resources.wood.owned / game.resources.wood.max) > 0.75) {
        buyBuilding('Shed');
    }

    if ((game.resources.metal.owned / game.resources.metal.max) > 0.75) {
        buyBuilding('Forge');
    }

    var priorityUpgrades = ['Anger', 'Battle', 'Bloodlust', 'Bounty', 'Coordination', 'Efficiency', 'Egg', 'Explorers', 'Gymystic', 'Miners', 'Potency', 'Scientists', 'Speedfarming', 'Speedlumber', 'Speedminer', 'Speedscience', 'TrainTacular', 'Trainers', 'UberHotel', 'UberHouse', 'UberHut', 'UberMansion', 'UberResort'],
        hasPriority = false;


    for (var i = 0; i < priorityUpgrades.length; i++) {
        if (game.upgrades[priorityUpgrades[i]].locked == 0) {

            var result = buyUpgrade(priorityUpgrades[i]);

            if (result) {
                console.log('Upgraded ' + priorityUpgrades[i]);
            }
            else{
                hasPriority = true;
            }

        }
    }





}