const IPM_DATA = [
    //smelts

    {
        id: 'copper-bar',
        name: 'Copper Bar',
        type: 'smelt',
        reqs: []
    },

    {
        id: 'silver-bar',
        name: 'Silver Bar',
        type: 'smelt',
        reqs: []
    },

    {
        id: 'silicon-bar',
        name: 'Silicon Bar',
        type: 'smelt',
        reqs: []
    },

    {
        id: 'aluminum-bar',
        name: 'Aluminum Bar',
        type: 'smelt',
        reqs: []
    },

    {
        id: 'bronze-alloy',
        name: 'Bronze Alloy',
        type: 'smelt',
        reqs: [
            { id: 'copper-bar', qty: 10 },
            { id: 'silver-bar', qty: 2 }
        ],
        eff_reqs: [
            { id: 'copper-bar', qty: 8 },
            { id: 'silver-bar', qty: 2 }
        ]
    },




    //crafts

    {
        id: 'copper-wire',
        name: 'Copper Wire',
        type: 'craft',
        reqs: [
            { id: 'copper-bar', qty: 5 }
        ],
        eff_reqs: [
            { id: 'copper-bar', qty: 4 }
        ]
    },

    {
        id: 'battery',
        name: 'Battery',
        type: 'craft',
        reqs: [
            { id: 'copper-wire', qty: 2},
            { id: 'copper-bar', qty: 10}
        ],
        eff_reqs: [
            { id: 'copper-wire', qty: 2},
            { id: 'copper-bar', qty: 8}
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
    }


]