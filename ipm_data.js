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

]