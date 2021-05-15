var IPM_DATA = [
    //ores

    {
        id: 'copper',
        name: 'Copper',
        type: 'ore',
        reqs: []
    },

    {
        id: 'iron',
        name: 'Iron',
        type: 'ore',
        reqs: []
    },

    {
        id: 'lead',
        name: 'Lead',
        type: 'ore',
        reqs: []
    },

    {
        id: 'silica',
        name: 'Silica',
        type: 'ore',
        reqs: []
    },

    {
        id: 'aluminum',
        name: 'Aluminum',
        type: 'ore',
        reqs: []
    },

    {
        id: 'silver',
        name: 'Silver',
        type: 'ore',
        reqs: []
    },

    {
        id: 'gold',
        name: 'Gold',
        type: 'ore',
        reqs: []
    },

    {
        id: 'diamond',
        name: 'Diamond',
        type: 'ore',
        reqs: []
    },

    {
        id: 'platinum',
        name: 'Platinum',
        type: 'ore',
        reqs: []
    },

    {
        id: 'titanium',
        name: 'Titanium',
        type: 'ore',
        reqs: []
    },

    {
        id: 'iridium',
        name: 'Iridium',
        type: 'ore',
        reqs: []
    },

    {
        id: 'paladium',
        name: 'Paladium',
        type: 'ore',
        reqs: []
    },

    {
        id: 'osmium',
        name: 'Osmium',
        type: 'ore',
        reqs: []
    },

    {
        id: 'rhodium',
        name: 'Rhodium',
        type: 'ore',
        reqs: []
    },

    {
        id: 'inerton',
        name: 'Inerton',
        type: 'ore',
        reqs: []
    },

    {
        id: 'quadium',
        name: 'Quadium',
        type: 'ore',
        reqs: []
    },

    {
        id: 'scrith',
        name: 'Scrith',
        type: 'ore',
        reqs: []
    },

    {
        id: 'uru',
        name: 'Uru',
        type: 'ore',
        reqs: []
    },

    {
        id: 'vibranium',
        name: 'Vibranium',
        type: 'ore',
        reqs: []
    },

    {
        id: 'aether',
        name: 'Aether',
        type: 'ore',
        reqs: []
    },

    {
        id: 'viterium',
        name: 'Viterium',
        type: 'ore',
        reqs: []
    },

    //smelts

    {
        id: 'copper-bar',
        name: 'Copper Bar',
        type: 'smelt',
        reqs: [
            { id: 'copper', qty: 1000 }
        ]
    },

    {
        id: 'iron-bar',
        name: 'Iron Bar',
        type: 'smelt',
        reqs: [
            { id: 'iron', qty: 1000 }
        ]
    },

    {
        id: 'lead-bar',
        name: 'Lead Bar',
        type: 'smelt',
        reqs: [
            { id: 'lead', qty: 1000 }
        ]
    },


    {
        id: 'silicon-bar',
        name: 'Silicon Bar',
        type: 'smelt',
        reqs: [
            { id: 'silica', qty: 1000 }
        ]
    },

    {
        id: 'aluminum-bar',
        name: 'Aluminum Bar',
        type: 'smelt',
        reqs: [
            { id: 'aluminum', qty: 1000 }
        ]
    },
    
    {
        id: 'silver-bar',
        name: 'Silver Bar',
        type: 'smelt',
        reqs: [
            { id: 'silver', qty: 1000 }
        ]
    },

    {
        id: 'gold-bar',
        name: 'Gold Bar',
        type: 'smelt',
        reqs: [
            { id: 'gold', qty: 1000 }
        ]
    },

    {
        id: 'bronze-bar',
        name: 'Bronze Bar',
        type: 'smelt',
        reqs: [
            { id: 'copper-bar', qty: 10 },
            { id: 'silver-bar', qty: 2 }
        ]
    },

    {
        id: 'steel-bar',
        name: 'Steel Bar',
        type: 'smelt',
        reqs: [
            { id: 'lead-bar', qty: 15 },
            { id: 'iron-bar', qty: 30 }
        ]
    },

    {
        id: 'platinum-bar',
        name: 'Platinum Bar',
        type: 'smelt',
        reqs: [
            { id: 'gold-bar', qty: 2 },
            { id: 'platinum', qty: 1000 }
        ]
    },

    {
        id: 'titanium-bar', 
        name: 'Titanium Bar',
        type: 'smelt',
        reqs: [
            { id: 'bronze-bar', qty: 2 },
            { id: 'titanium', qty: 1000 }
        ]
    },

    {
        id: 'iridium-bar',
        name: 'Iridium Bar',
        type: 'smelt',
        reqs: [
            { id: 'steel-bar', qty: 2 },
            { id: 'iridium', qty: 1000 }
        ]
    },

    {
        id: 'paladium-bar',
        name: 'Paladium Bar',
        type: 'smelt',
        reqs: [
            { id: 'platinum-bar', qty: 2 },
            { id: 'paladium', qty: 1000 }
        ]
    },

    {
        id: 'osmium-bar',
        name: 'Osmium Bar',
        type: 'smelt',
        reqs: [
            { id: 'titanium-bar', qty: 2 },
            { id: 'osmium', qty: 1000 }
        ]
    },

    {
        id: 'rhodium-bar',
        name: 'Rhodium Bar',
        type: 'smelt',
        reqs: [
            { id: 'iridium-bar', qty: 2 },
            { id: 'rhodium', qty: 1000 }
        ]
    },

    {
        id: 'inerton-bar',
        name: 'Inerton Bar',
        type: 'smelt',
        reqs: [
            { id: 'paladium-bar', qty: 2 },
            { id: 'inerton', qty: 1000 }
        ]
    },

    {
        id: 'quadium-bar',
        name: 'Quadium Bar',
        type: 'smelt',
        reqs: [
            { id: 'osmium-bar', qty: 2 },
            { id: 'quadium', qty: 1000 }
        ]
    },

    {
        id: 'scrith-bar',
        name: 'Scrith Bar',
        type: 'smelt',
        reqs: [
            { id: 'rhodium-bar', qty: 2 },
            { id: 'scrith', qty: 1000 }
        ]
    },

    {
        id: 'uru-bar',
        name: 'Uru Bar',
        type: 'smelt',
        reqs: [
            { id: 'inerton-bar', qty: 2 },
            { id: 'uru', qty: 1000 }
        ]
    },

    {
        id: 'vibranium-bar',
        name: 'Vibranium Bar',
        type: 'smelt',
        reqs: [
            { id: 'quadium-bar', qty: 2 },
            { id: 'vibranium', qty: 1000 }
        ]
    },

    {
        id: 'aether-bar',
        name: 'Aether Bar',
        type: 'smelt',
        reqs: [
            { id: 'scrith-bar', qty: 2 },
            { id: 'aether', qty: 1000 }
        ]
    },

    {
        id: 'viterium-bar',
        name: 'Viterium Bar',
        type: 'smelt',
        reqs: [
            { id: 'uru-bar', qty: 2 },
            { id: 'viterium', qty: 1000 }
        ]
    },


    //crafts

    {
        id: 'copper-wire',
        name: 'Copper Wire',
        type: 'craft',
        reqs: [
            { id: 'copper-bar', qty: 5 }
        ]
    },

    {
        id: 'iron-nails',
        name: 'Iron Nails',
        type: 'craft',
        reqs: [
            {id: 'iron-bar', qty: 5}
        ]
    },

    {
        id: 'battery',
        name: 'Battery',
        type: 'craft',
        reqs: [
            { id: 'copper-wire', qty: 2},
            { id: 'copper-bar', qty: 10}
        ]
    },

    {
        id: 'hammer',
        name: 'Hammer',
        type: 'craft',
        reqs: [
            { id: 'iron-nails', qty: 2 },
            { id: 'lead-bar', qty: 5 }
        ]
    },

    {
        id: 'glass',
        name: 'Glass',
        type: 'craft',
        reqs: [
            { id: 'silicon-bar', qty: 10 }
        ]
    },

    {
        id: 'circuit',
        name: 'Circuit',
        type: 'craft',
        reqs: [
            { id: 'copper-wire', qty: 10},
            { id: 'silicon-bar', qty: 5},
            { id: 'aluminum-bar', qty: 5}
        ]
    },

    {
        id: 'lense',
        name: 'Lense', 
        type: 'craft',
        reqs: [
            { id: 'glass', qty: 1 },
            { id: 'silver-bar', qty: 5 }
        ]
    },

    {
        id: 'laser',
        name: 'Laser',
        type: 'craft',
        reqs: [
            { id: 'gold-bar', qty: 5 },
            { id: 'lense', qty: 1 },
            { id: 'iron-bar', qty: 10 }
        ]
    },

    {
        id: 'basic-computer',
        name: 'Basic Computer',
        type: 'craft',
        reqs: [
            { id: 'circuit', qty: 5 },
            { id: 'silver-bar', qty: 5 }
        ]
    },

    {
        id: 'solar-panel',
        name: 'Solar Panel',
        type: 'craft',
        reqs: [
            { id: 'circuit', qty: 5 },
            { id: 'glass', qty: 10 }
        ]
    },

    {
        id: 'laser-torch',
        name: 'Laser Torch',
        type: 'craft',
        reqs: [
            { id: 'bronze-bar', qty: 5 },
            { id: 'laser', qty: 2 },
            { id: 'lense', qty: 5 }
        ]
    },

    {
        id: 'advanced-battery',
        name: 'Advanced Battery',
        type: 'craft',
        reqs: [
            { id: 'steel-bar', qty: 20 },
            { id: 'battery', qty: 30 }
        ]
    },

    {
        id: 'thermal-scanner',
        name: 'Thermal Scanner',
        type: 'craft',
        reqs: [
            { id: 'platinum-bar', qty: 5 },
            { id: 'laser', qty: 2 },
            { id: 'glass', qty: 5 }
        ]
    },

    {
        id: 'advanced-computer',
        name: 'Advanced Computer',
        type: 'craft',
        reqs: [
            { id: 'basic-computer', qty: 5 },
            { id: 'titanium-bar', qty: 5 }
        ]
    },

    {
        id: 'navigation-module',
        name: 'Navigation Module',
        type: 'craft',
        reqs: [
            { id: 'laser-torch', qty: 2 },
            {id: 'thermal-scanner', qty: 1}
        ]
    },

    {
        id: 'plasma-torch',
        name: 'Plasma Torch',
        type: 'craft',
        reqs: [
            { id: 'iridium-bar', qty: 15 },
            { id: 'laser-torch', qty: 5 }
        ]
    },

    {
        id: 'radio-tower',
        name: 'Radio Tower',
        type: 'craft',
        reqs: [
            { id: 'aluminum-bar', qty: 150 },
            { id: 'platinum-bar', qty: 75 },
            { id: 'titanium-bar', qty: 50 }
        ]
    },

    {
        id: 'telescope',
        name: 'Telescope',
        type: 'craft',
        reqs: [
            { id: 'lense', qty: 20 },
            { id: 'advanced-computer', qty: 1 }
        ]
    },

    {
        id: 'satellite-dish',
        name: 'Satellite Dish',
        type: 'craft',
        reqs: [
            { id: 'steel-bar', qty: 150 },
            { id: 'paladium-bar', qty: 30 }
        ]
    },

    {
        id: 'motor',
        name: 'Motor',
        type: 'craft',
        reqs: [
            { id: 'bronze-bar', qty: 500 },
            { id: 'hammer', qty: 200 }
        ]
    },

    {
        id: 'accumulator',
        name: 'Accumulator',
        type: 'craft',
        reqs: [
            { id: 'osmium-bar', qty: 20 },
            { id: 'advanced-battery', qty: 3 }
        ]
    },

    {
        id: 'nuclear-capsule',
        name: 'Nuclear Capsule',
        type: 'craft',
        reqs: [
            { id: 'rhodium-bar', qty: 5 },
            { id: 'plasma-torch', qty: 1 }
        ]
    },

    {
        id: 'wind-turbine',
        name: 'Wind Turbine',
        type: 'craft',
        reqs: [
            { id: 'aluminum-bar', qty: 300 },
            { id: 'motor', qty: 1 }
        ]
    },


    {
        id: 'space-probe',
        name: 'Space Probe',
        type: 'craft',
        reqs: [
            { id: 'solar-panel', qty: 25 },
            { id: 'telescope', qty: 1 },
            { id: 'satellite-dish', qty: 1 }
        ]
    },

    {
        id: 'nuclear-reactor',
        name: 'Nuclear Reactor',
        type: 'craft',
        reqs: [
            { id: 'iridium-bar', qty: 300 },
            { id: 'nuclear-capsule', qty: 1 }
        ]
    },

    {
        id: 'collider',
        name: 'Collider',
        type: 'craft',
        reqs: [
            { id: 'inerton-bar', qty: 500 },
            { id: 'quadium-bar', qty: 100 }
        ]
    },

    {
        id: 'gravity-chamber',
        name: 'Gravity Chamber',
        type: 'craft',
        reqs: [
            { id: 'advanced-computer', qty: 60 },
            { id: 'nuclear-reactor', qty: 1 }
        ]
    },


    {
        id: 'robot',
        name: 'Robot',
        type: 'craft',
        reqs: [
            { id: 'scrith-bar', qty: 300 },
            { id: 'accumulator', qty: 90 }
        ]
    },

    {
        id: 'fusion-capsule',
        name: 'Fusion Capsule',
        type: 'craft',
        reqs: [
            { id: 'uru-bar', qty: 200 },
            { id: 'vibranium-bar', qty: 100 },
            { id: 'nuclear-capsule', qty: 100 }
        ]
    },

    {
        id: 'teleporter',
        name: 'Teleporter',
        type: 'craft',
        reqs: [
            { id: 'navigation-module', qty: 250 },
            { id: 'gravity-chamber', qty: 1 }
        ]
    },

    {
        id: 'teleporfusion-reactorter',
        name: 'Fusion Reactor',
        type: 'craft',
        reqs: [
            { id: 'collider', qty: 40 },
            { id: 'nuclear-reactor', qty: 50 },
            { id: 'fusion-capsule', qty: 1}
        ]
    },






    {
        id: 'asteroid-miner',
        name: 'Asteroid Miner',
        type: 'project',
        category: 'Basic',
        reqs: [
            { id: 'copper', qty: 400 },
            { id: 'iron', qty: 100 }
        ]
    },

    {
        id: 'management',
        name: 'Management',
        type: 'project',
        category: 'Basic',
        reqs: [
            { id: 'copper', qty: 400 },
            { id: 'iron', qty: 50 }
        ]
    },

    {
        id: 'telescope-1',
        name: 'Telescope 1',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'iron', qty: 1500 },
            { id: 'copper-bar', qty: 5 },
            { id: 'management' }
        ]
    },

    {
        id: 'beacon',
        name: 'Beacon',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'iron-bar', qty: 15 },
            { id: 'telescope-1' }
        ]
    },

    {
        id: 'telescope-2',
        name: 'Telescope 2',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'lead-bar', qty: 10 },
            { id: 'silica', qty: 500 },
            { id: 'telescope-1' }
        ]
    },

    {
        id: 'resource-details',
        name: 'Resource Details',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'battery', qty: 3 },
            { id: 'telescope-2'}
        ]
    },

    {
        id: 'telescope-3',
        name: 'Telescope 3',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'iron-nails', qty: 10 },
            { id: 'silicon-bar', qty: 15 },
            { id: 'telescope-2'}
        ]
    },

    {
        id: 'asteroid-refined-drilling',
        name: 'Asteroid Refined Drilling',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'silicon-bar', qty: 40 },
            { id: 'lead-bar', qty: 80 },
            { id: 'telescope-3'}
        ]
    },

    {
        id: 'asteroid-harvester',
        name: 'Asteroid Harvester',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'iron-bar', qty: 400 },
            { id: 'circuit', qty: 5 },
            { id: 'asteroid-refined-drilling'}
        ]
    },

    {
        id: 'advanced-asteroid-harvester',
        name: 'Advanced Asteroid Harvester',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'space-probe', qty: 1 },
            { id: 'plasma-torch', qty: 50 },
            { id: 'asteroid-harvester'}
        ]
    },

    {
        id: 'superior-asteroid-harvester',
        name: 'Superior Asteroid Harvester',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'nuclear-reactor', qty: 10 },
            { id: 'scrith-bar', qty: 300 },
            { id: 'inerton-bar', qty: 600 },
            { id: 'advanced-asteroid-harvester' }
        ]
    },

    {
        id: 'asteroid-auto-miner',
        name: 'Asteroid Auto Miner',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'advanced-computer', qty: 20 },
            { id: 'solar-panel', qty: 100 },
            { id: 'asteroid-harvester' }
        ]
    },

    {
        id: 'asteroid-scanner',
        name: 'Asteroid Scanner',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'thermal-scanner', qty: 30 },
            { id: 'navigation-module', qty: 5 },
            { id: 'asteroid-harvester' }
        ]
    },

    {
        id: 'advanced-asteroid-scanner',
        name: 'Advanced Asteroid Scanner',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'telescope', qty: 150 },
            { id: 'asteroid-scanner' }
        ]
    },

    {
        id: 'telescope-4',
        name: 'Telescope 4',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'hammer', qty: 5 },
            { id: 'aluminum-bar', qty: 20 },
            { id: 'telescope-3'}
        ]
    },

    {
        id: 'market-insight',
        name: 'Market Insight',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'silver-bar', qty: 20 },
            { id: 'hammer', qty: 10 },
            { id: 'telescope-4' }
        ]
    },

    {
        id: 'inside-trader',
        name: 'Inside Trader',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'steel-bar', qty: 25 },
            { id: 'lense', qty: 10 },
            { id: 'market-insight' }
        ]
    },

    {
        id: 'cargo-logistics',
        name: 'Cargo Logistics',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'aluminum-bar', qty: 10 },
            { id: 'circuit', qty: 3 },
            { id: 'telescope-4' }
        ]
    },

    {
        id: 'ore-targeting',
        name: 'Ore Targeting',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'hammer', qty: 100 },
            { id: 'battery', qty: 50 },
            { id: 'cargo-logistics' }
        ]
    },

    {
        id: 'advanced-ore-targeting',
        name: 'Advanced Ore Targeting',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'basic-computer', qty: 100 },
            { id: 'thermal-scanner', qty: 15 },
            { id: 'ore-targeting' }
        ]
    },

    {
        id: 'telescope-5',
        name: 'Telescope 5',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'circuit', qty: 3 },
            { id: 'gold-bar', qty: 10 },
            { id: 'telescope-4' }
        ]
    },

    {
        id: 'rover-advanced-logistics',
        name: 'Rover Advanced Logistics',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'bronze-bar', qty: 20 },
            { id: 'battery', qty: 20 },
            { id: 'lense', qty: 10 },
            { id: 'telescope-5' }
        ]
    },

    {
        id: 'rover-scanning-module',
        name: 'Rover Scanning Module',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'aluminum-bar', qty: 100 },
            { id: 'basic-computer', qty: 1 },
            { id: 'rover-advanced-logistics' }
        ]
    },

    {
        id: 'telescope-6',
        name: 'Telescope 6',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'laser', qty: 3 },
            { id: 'bronze-bar', qty: 25 },
            { id: 'telescope-5' }
        ]
    },

    {
        id: 'manager-training',
        name: 'Manager Training',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'laser-torch', qty: 1 },
            { id: 'steel-bar', qty: 50 },
            { id: 'telescope-6' }
        ]
    },

    {
        id: 'telescope-7',
        name: 'Telescope 7',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'solar-panel', qty: 3 },
            { id: 'platinum-bar', qty: 20 },
            { id: 'telescope-6' }
        ]
    },

    {
        id: 'telescope-8',
        name: 'Telescope 8',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'laser-torch', qty: 3 },
            { id: 'titanium-bar', qty: 10 },
            { id: 'telescope-7' }
        ]
    },

    {
        id: 'telescope-9',
        name: 'Telescope 9',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'advanced-battery', qty: 3 },
            { id: 'iridium-bar', qty: 10 },
            { id: 'telescope-8' }
        ]
    },

    {
        id: 'telescope-10',
        name: 'Telescope 10',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'thermal-scanner', qty: 3 },
            { id: 'paladium-bar', qty: 10 },
            { id: 'telescope-9' }
        ]
    },

    {
        id: 'advanced-manager-training',
        name: 'Advanced Manager Training',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'advanced-computer', qty: 2 },
            { id: 'advanced-battery', qty: 10 },
            { id: 'telescope-10' }
        ]
    },

    {
        id: 'telescope-11',
        name: 'Telescope 11',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'advanced-computer', qty: 3 },
            { id: 'osmium-bar', qty: 10 },
            { id: 'telescope-10' }
        ]
    },

    {
        id: 'telescope-12',
        name: 'Telescope 12',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'navigation-module', qty: 3 },
            { id: 'rhodium-bar', qty: 10 },
            { id: 'telescope-11' }
        ]
    },

    {
        id: 'telescope-13',
        name: 'Telescope 13',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'radio-tower', qty: 3 },
            { id: 'inerton-bar', qty: 10 },
            { id: 'telescope-12' }
        ]
    },

    {
        id: 'superior-manager-training',
        name: 'Superior Manager Training',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'rhodium-bar', qty: 200 },
            { id: 'telescope-13' }
        ]
    },

    {
        id: 'telescope-14',
        name: 'Telescope 14',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'satellite-dish', qty: 3 },
            { id: 'quadium-bar', qty: 10 },
            { id: 'telescope-13' }
        ]
    },

    {
        id: 'telescope-15',
        name: 'Telescope 15',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'motor', qty: 5 },
            { id: 'scrith-bar', qty: 10 },
            { id: 'telescope-14' }
        ]
    },

    {
        id: 'telescope-16',
        name: 'Telescope 16',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'accumulator', qty: 3 },
            { id: 'uru-bar', qty: 10 },
            { id: 'telescope-15' }
        ]
    },

    {
        id: 'telescope-17',
        name: 'Telescope 17',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'nuclear-capsule', qty: 3 },
            { id: 'vibranium-bar', qty: 10 },
            { id: 'telescope-16' }
        ]
    },

    {
        id: 'telescope-18',
        name: 'Telescope 18',
        type: 'project',
        category: 'Telescope',
        reqs: [
            { id: 'wind-turbine', qty: 4 },
            { id: 'aether-bar', qty: 10 },
            { id: 'telescope-17' }
        ]
    },

    {
        id: 'colonization',
        name: 'Colonization',
        type: 'project',
        category: 'Colonization',
        reqs: [
            { id: 'copper-bar', qty: 20 },
            { id: 'iron-bar', qty: 10 },
            { id: 'management' }
        ]
    },

    {
        id: 'colonization-scouting',
        name: 'Colonization Scouting',
        type: 'project',
        category: 'Colonization',
        reqs: [
            { id: 'iron-nails', qty: 15 },
            { id: 'colonization' }
        ]
    },

    {
        id: 'colonization-advanced-scouting',
        name: 'Colonization Advanced Scouting',
        type: 'project',
        category: 'Colonization',
        reqs: [
            { id: 'silver-bar', qty: 40 },
            { id: 'colonization-scouting' }
        ]
    },

    {
        id: 'colonization-superior-scouting',
        name: 'Colonization Superior Scouting',
        type: 'project',
        category: 'Colonization',
        reqs: [
            { id: 'diamond', qty: 25000 },
            { id: 'colonization-advanced-scouting' }
        ]
    },

    {
        id: 'colonization-efficiency',
        name: 'Colonization Efficiency',
        type: 'project',
        category: 'Colonization',
        reqs: [
            { id: 'silver-bar', qty: 15 },
            { id: 'hammer', qty: 10 },
            { id: 'colonization' }
        ]
    },

    {
        id: 'colonization-advanced-efficiency',
        name: 'Colonization Advanced Efficiency',
        type: 'project',
        category: 'Colonization',
        reqs: [
            { id: 'steel-bar', qty: 40 },
            { id: 'laser', qty: 10 },
            { id: 'colonization-efficiency' }
        ]
    },

    {
        id: 'colonization-superior-efficiency',
        name: 'Colonization Superior Efficiency',
        type: 'project',
        category: 'Colonization',
        reqs: [
            { id: 'paladium-bar', qty: 50 },
            { id: 'laser-torch', qty: 15 },
            { id: 'colonization-advanced-efficiency' }
        ]
    },

    {
        id: 'terraforming',
        name: 'Terraforming',
        type: 'project',
        category: 'Colonization',
        reqs: [
            { id: 'diamond', qty: 20000 },
            { id: 'thermal-scanner', qty: 10 },
            { id: 'colonization-advanced-efficiency' }
        ]
    },

    {
        id: 'advanced-terraforming',
        name: 'Advanced Terraforming',
        type: 'project',
        category: 'Colonization',
        reqs: [
            { id: 'satellite-dish', qty: 10 },
            { id: 'terraforming' }
        ]
    },

    {
        id: 'colony-tax-incentives',
        name: 'Colony Tax Incentives',
        type: 'project',
        category: 'Colonization',
        reqs: [
            { id: 'aluminum-bar', qty: 60 },
            { id: 'colonization-scouting' },
            { id: 'colonization-efficiency'}
        ]
    },

    {
        id: 'colony-advanced-tax-incentives',
        name: 'Colony Advanced Tax Incentives',
        type: 'project',
        category: 'Colonization',
        reqs: [
            { id: 'bronze-bar', qty: 60 },
            { id: 'colony-tax-incentives' }
        ]
    },

    {
        id: 'colony-superior-tax-incentives',
        name: 'Colony Superior Tax Incentives',
        type: 'project',
        category: 'Colonization',
        reqs: [
            { id: 'paladium-bar', qty: 60 },
            { id: 'colony-advanced-tax-incentives' }
        ]
    },

    {
        id: 'rover',
        name: 'Rover',
        type: 'project',
        category: 'Planets',
        reqs: [
            { id: 'copper-wire', qty: 10 },
            { id: 'asteroid-miner' }
        ]
    },

    {
        id: 'advanced-mining',
        name: 'Advanced Mining',
        type: 'project',
        category: 'Planets',
        reqs: [
            { id: 'battery', qty: 5 },
            { id: 'aluminum-bar', qty: 20 },
            { id: 'rover' }
        ]
    },

    {
        id: 'advanced-thrusters',
        name: 'Advanced Thrusters',
        type: 'project',
        category: 'Planets',
        reqs: [
            { id: 'glass', qty: 2 },
            { id: 'gold-bar', qty: 10 },
            { id: 'advanced-mining' }
        ]
    },

    {
        id: 'advanced-cargo-handling',
        name: 'Advanced Cargo Handling',
        type: 'project',
        category: 'Planets',
        reqs: [
            { id: 'hammer', qty: 5 },
            { id: 'silver-bar', qty: 25 },
            { id: 'advanced-mining' }
        ]
    },

    {
        id: 'superior-mining',
        name: 'Superior Mining',
        type: 'project',
        category: 'Planets',
        reqs: [
            { id: 'laser-torch', qty: 10 },
            { id: 'platinum-bar', qty: 25 },
            { id: 'advanced-thrusters' },
            { id: 'advanced-cargo-handling' }
        ]
    },

    {
        id: 'superior-thrusters',
        name: 'Superior Thrusters',
        type: 'project',
        category: 'Planets',
        reqs: [
            { id: 'advanced-battery', qty: 4 },
            { id: 'superior-mining' }
        ]
    },

    {
        id: 'superior-cargo-handling',
        name: 'Superior Cargo Handling',
        type: 'project',
        category: 'Planets',
        reqs: [
            { id: 'titanium-bar', qty: 50 },
            { id: 'superior-mining' }
        ]
    },

    {
        id: 'smelter',
        name: 'Smelter',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'copper', qty: 600 },
            { id: 'iron', qty: 250 },
            { id: 'asteroid-miner' }
        ]
    },

    {
        id: 'crafter',
        name: 'Crafter',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'lead', qty: 5000 },
            { id: 'iron-bar', qty: 5 },
            { id: 'smelter' }
        ]
    },

    {
        id: 'advanced-crafter',
        name: 'Advanced Crafter',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'lense', qty: 5 },
            { id: 'gold-bar', qty: 50 },
            { id: 'crafter' }
        ]
    },

    {
        id: 'crafting-efficiency',
        name: 'Crafting Efficiency',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'solar-panel', qty: 40 },
            { id: 'advanced-crafter' }
        ]
    },

    {
        id: 'superior-crafting',
        name: 'Superior Crafting',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'thermal-scanner', qty: 2 },
            { id: 'advanced-battery', qty: 10 },
            { id: 'laser-torch', qty: 20 },
            { id: 'crafting-efficiency' },
            { id: 'advanced-item-value' }
        ]
    },

    {
        id: 'advanced-item-value',
        name: 'Advanced Item Value',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'lense', qty: 1 },
            { id: 'silver-bar', qty: 5 },
            { id: 'advanced-crafter' }
        ]
    },

    {
        id: 'crafting-specialist',
        name: 'Crafting Specialist',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'advanced-battery', qty: 2 },
            { id: 'advanced-computer', qty: 2 },
            { id: 'advanced-item-value' }
        ]
    },

    {
        id: 'superior-item-value',
        name: 'Superior Item Value',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'paladium-bar', qty: 200 },
            { id: 'laser-torch', qty: 25 },
            { id: 'advanced-item-value' }
        ]
    },

    {
        id: 'advanced-furnace',
        name: 'Advanced Furnace',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'glass', qty: 3 },
            { id: 'aluminum-bar', qty: 10 },
            { id: 'smelter' }
        ]
    },

    {
        id: 'smelting-efficiency',
        name: 'Smelting Efficiency',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'bronze-bar', qty: 200 },
            { id: 'advanced-furnace' }
        ]
    },

    {
        id: 'superior-furnace',
        name: 'Superior Furnace',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'iridium-bar', qty: 5 },
            { id: 'titanium-bar', qty: 20 },
            { id: 'platinum-bar', qty: 50 },
            { id: 'smelting-efficiency' },
            { id: 'advanced-alloy-value' }
        ]
    },

    {
        id: 'advanced-alloy-value',
        name: 'Advanced Alloy Value',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'circuit', qty: 3 },
            { id: 'silver-bar', qty: 10 },
            { id: 'advanced-furnace' }
        ]
    },

    {
        id: 'smelting-specialist',
        name: 'Smelting Specialist',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'basic-computer', qty: 5 },
            { id: 'advanced-battery', qty: 2 },
            { id: 'advanced-alloy-value' }
        ]
    },

    {
        id: 'superior-alloy-value',
        name: 'Superior Alloy Value',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'diamond', qty: 250000 },
            { id: 'laser', qty: 30 },
            { id: 'advanced-alloy-value' }
        ]
    },

    {
        id: 'preferred-vendor',
        name: 'Preferred Vendor',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'iron-nails', qty: 200 },
            { id: 'hammer', qty: 75 },
            { id: 'circuit', qty: 40 },
            { id: 'superior-furnace' }
        ]
    },

    {
        id: 'furnace-overdrive',
        name: 'Furnace Overdrive',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'osmium-bar', qty: 20 },
            { id: 'plasma-torch', qty: 1 },
            { id: 'superior-furnace' }
        ]
    },

    {
        id: 'advanced-furnace-overdrive',
        name: 'Advanced Furnace Overdrive',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'rhodium-bar', qty: 40 },
            { id: 'inerton-bar', qty: 20 },
            { id: 'thermal-scanner', qty: 10 },
            { id: 'furnace-overdrive' }
        ]
    },

    {
        id: 'furnace-overdrive-efficiency',
        name: 'Furnace Overdrive Efficiency',
        type: 'project',
        category: 'Production',
        reqs: [
            { id: 'iridium-bar', qty: 200 },
            { id: 'motor', qty: 1 },
            { id: 'furnace-overdrive' }
        ]
    },


    
]