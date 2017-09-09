
// game.global.soldierHealth
// game.global.soldierCurrentBlock
// ourBaseDamage = (baseDamage * (1-getPlayerCritChance()) + (baseDamage * getPlayerCritChance() * getPlayerCritDamageMult()));

// enemyHealth = getEnemyMaxHealth(game.global.world + 1,50);




/*
special maps
11 - the block (Shieldblock)
15 - the wall (Bounty)
21 - dimension of anger (portal)
33 - trimple of doom

*/



var TrimpShifter = {
    STATE_ENUM: {

    },

    Config: {
        Version: '1.0.29',
        LoopInterval: 250,
        Enabled: true,
        LogEnabled: true,
    },

    Settings: {
        AutoBuyStorage: false,
        AutoBuyJobs: false,
        AutoBuyBuildings: false,
        AutoBuyUpgrades: false,
        AutoBuyEquipment: false,
        AutoPrestige: false,
        GatewayFragmentRatio: 0.1,
        WormholeHeliumRatio: 0.05,
        StorageRatio: 0.5,
        MaxScientists: function () {
            return (game.jobs.Farmer.owned + game.jobs.Lumberjack.owned + game.jobs.Miner.owned) / 24;
        },
        MaxExplorers: function () {
            return game.global.world * 3;
        }

    },

    Variables: {
        LastGathered: 'food',
        TimerID: -1
    },

    Init: function () {
        console.log(this);
        console.log('TrimpShifter v.' + this.Config.Version);
        this.Start();
    },

    MainLoop: function () {
        //game is paused, do nothing
        if (game.options.menu.pauseGame.enabled)
            return;


        //TrimpShifter is disabled, kick out of loop
        if (!this.Config.Enabled) {
            clearInterval(this.Variables.TimerID);
            console.log('TrimpShifter stopping');
        }


        //game.resources.trimps.owned==0
        //new game, do stuff

        // if(game.resources.trimps.owned/game.resources.trimps.realMax())<0.5
        // below breeding threshhold, check traps
        // setGather('trimps')


        // game.global.trapBuildAllowed
        // check if autotrap is available

        // game.global.trapBuildToggled



        //storage always has priority
        if (this.Settings.AutoBuyStorage)
            this.CheckStorage();

        if (this.Settings.AutoBuyJobs)
            this.CheckJobs();



        if (this.Settings.AutoBuyUpgrades) {
            var priorityUpgrades = ['Anger', 'Battle', 'Blockmaster', 'Bloodlust', 'Bounty', 'Coordination', 'Efficiency', 'Egg', 'Explorers', 'Gymystic', 'Miners', 'Potency', 'Scientists', 'Speedfarming', 'Speedlumber', 'Speedminer', 'Speedscience', 'TrainTacular', 'Trainers', 'Trapstorm', 'UberHotel', 'UberHouse', 'UberHut', 'UberMansion', 'UberResort'];


            for (var i = 0; i < priorityUpgrades.length; i++) {
                if (game.upgrades[priorityUpgrades[i]].locked == 0) {

                    this.BuyUpgrade(priorityUpgrades[i]);

                }
            }


        }

        if (this.Settings.AutoPrestige) {

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
                    this.BuyUpgrade(upgrades[i]);
            }
        }



        

        if (this.Settings.AutoBuyEquipment) {


            //level up equipment
            var weapons = ['Dagger', 'Mace', 'Battleaxe', 'Polearm', 'Greatsword'],
                armor = ['Boots', 'Helmet', 'Pants', 'Breastplate', 'Shoulderguards'];



            for (var i = 0; i < weapons.length; i++) {

                if (game.equipment[weapons[i]].locked == 0 && game.equipment[weapons[i]].level < 9) {
                    this.BuyEquipment(weapons[i]);
                }
            }

            for (var i = 0; i < armor.length; i++) {

                if (game.equipment[armor[i]].locked == 0 && game.equipment[armor[i]].level < 11) {
                    this.BuyEquipment(armor[i]);
                }
            }

            if (game.equipment.Shield.locked == 0 && game.equipment.Shield.level < 5) {
                this.BuyEquipment('Shield');
            }


        }





        if (this.Settings.AutoBuyBuildings) {

            //level up buildings
            var buildings = [
                'Gym',
                'Nursery',
                'Tribute',
                'Wormhole',
                'Gateway',
                'Resort',
                'Hotel',
                'Mansion',
                'House',
                'Hut'
            ];

            for (var i = 0; i < buildings.length; i++) {
                if (game.buildings[buildings[i]].locked == 0) {
                    var build = true;
                    if (buildings[i] == 'Wormhole') {
                        var h = Math.floor(10 * Math.pow(1.075, game.buildings.Wormhole.owned));
                        if (game.resources.helium.owned * this.Settings.WormholeHeliumRatio < h)
                            build = false;
                    }
                    else if (buildings[i] == 'Gateway') {
                        var f = game.buildings.Gateway.cost.fragments[0] * Math.pow(game.buildings.Gateway.cost.fragments[1], game.buildings.Gateway.purchased);
                        if (game.resources.fragments.owned * this.Settings.GatewayFragmentRatio < f)
                            build = false;
                    }

                    if (build)
                        this.BuyBuilding(buildings[i]);
                }
            }


        }









        if (game.global.buildingsQueue.length > 0 && game.global.playerGathering != 'buildings') {
            this.Variables.LastGathered = game.global.playerGathering;

            setGather('buildings');
        }
        else if (game.global.buildingsQueue.length == 0 && game.global.playerGathering == 'buildings') {
            setGather(this.Variables.LastGathered);
        }

    },

    CheckStorage: function () {
        numTab(1);

        if ((game.resources.food.owned / (game.resources.food.max * (1 + (game.portal.Packrat.modifier * game.portal.Packrat.level)))) > this.Settings.StorageRatio) {
            this.BuyBuilding('Barn');
        }

        if ((game.resources.wood.owned / (game.resources.wood.max * (1 + (game.portal.Packrat.modifier * game.portal.Packrat.level)))) > this.Settings.StorageRatio) {
            this.BuyBuilding('Shed');
        }

        if ((game.resources.metal.owned / (game.resources.metal.max * (1 + (game.portal.Packrat.modifier * game.portal.Packrat.level)))) > this.Settings.StorageRatio) {
            this.BuyBuilding('Forge');
        }
    },

    CheckJobs: function () {
        if (game.workspaces > 0) {
            numTab(1);

            if (game.jobs.Trainer.locked == 0) {
                
                var trainer_cost = game.jobs.Trainer.cost.food[0] * Math.pow(game.jobs.Trainer.cost.food[1], game.jobs.Trainer.owned);
                if (trainer_cost <= game.resources.food.owned)
                    this.BuyJob('Trainer');
                
            }


            if (game.jobs.Explorer.locked == 0) {
                var explorer_cost = game.jobs.Explorer.cost.food[0] * Math.pow(game.jobs.Explorer.cost.food[1], game.jobs.Explorer.owned);

                if (game.jobs.Explorer.owned < this.Settings.MaxExplorers() && explorer_cost <= game.resources.food.owned) {

                    this.BuyJob('Explorer');
                }
            }

            

            if (this.Settings.MaxScientists() > this.Settings.ScientistRatio) {
                this.BuyJob('Scientist');

            }

            if (game.workspaces > 300)
                numTab(4);

            if (game.jobs.Miner.locked == 0 && game.jobs.Miner.owned < game.jobs.Lumberjack.owned)
                this.BuyJob('Miner');

            if (game.jobs.Lumberjack.locked == 0 && game.jobs.Lumberjack.owned < game.jobs.Farmer.owned)
                this.BuyJob('Lumberjack');

            if (game.jobs.Farmer.locked == 0)
                this.BuyJob('Farmer');

            numTab(1);

        }
    },



    Stop: function () {
        this.Config.Enabled = false;
    },
    Start: function () {
        console.log('TrimpShifter starting');
        this.Config.Enabled = true;
        this.Variables.TimerID = setInterval(this.MainLoop, this.Config.LoopInterval);
    },

    BuyJob: function (what) {
        buyJob(what, true, true);
    },
    BuyBuilding: function (what) {
        var result = buyBuilding(what, true, true);
        if (result && this.config.LogEnabled)
            console.log('TrimpShifter - buying building ' + what);
        return result;
    },
    BuyUpgrade: function (what) {
        var result = buyUpgrade(what, true, true);
        if (result && this.config.LogEnabled)
            console.log('TrimpShifter - buying upgrade ' + what);

        return result;
    },
    BuyEquipment: function (what) {
        var canBuy = false;
        if (what == 'Shield') {
            if (game.resources.wood.owned >= (game.equipment["Shield"].cost.wood[0] * Math.pow(game.equipment["Shield"].cost.wood[1], game.equipment["Shield"].level)) * Math.pow(0.95, game.portal.Artisanistry.level))
                canBuy = true;
        }
        else {
            if (game.resources.metal.owned >= (game.equipment[what].cost.metal[0] * Math.pow(game.equipment[what].cost.metal[1], game.equipment[what].level)) * Math.pow(0.95, game.portal.Artisanistry.level))
                canBuy = true;
        }
        if (canBuy) {
            buyEquipment(what, null, true);

            if (this.config.LogEnabled)
                console.log('TrimpShifter - buying equipment ' + what);
        }
    },
    Debug: function (msg) {

    },
    Message: function (msg) {
       
    }


}





setTimeout(TrimpShifter.Init, 2000);
