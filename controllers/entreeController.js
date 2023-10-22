const entrees = [
    {
        name: 'Grilled Salmon',
        price: 18,
        spicy: false
    },
    {
        name: 'Beef Steak',
        price: 20,
        spicy: false
    },
    {
        name: 'Vegetable Stir-Fry',
        price: 14,
        spicy: true
    }
];

const getEntrees = (req, res) => {
    res.send(entrees);
}

const getEntreeById = (req, res) => {
    const entreeId = req.params.id;
    if (entreeId < entrees.length) {
        res.send(entrees[entreeId]);
    } else {
        res.status(404).send('Entree not found');
    }
}

module.exports = {
    getEntrees,
    getEntreeById
};
