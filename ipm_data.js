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
    }


]