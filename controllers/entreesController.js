const entrees = [
    {
        id: 1,
        item: 'Fettuccini Alffredo',
        allergens: ['wheat', 'dairy'],
        price_dollars: 15,
        vegan: false
    },
    {
        id: 2,
        item: 'Lasagna',
        allergens: ['wheat', 'dairy'],
        price_dollars: 17,
        vegan: false
    },
    {
        id: 3,
        item: 'Lemon Chicken and Asparagus',
        allergens: [],
        price: 16,
        vegan: false
    }
]

const getEntrees = (req, res) => {
    res.send(entrees)
}

const entreeById = (req, res) => {
    res.send(entrees.find((entree) => entree.id == req.params.id))
}

module.exports = {
    getEntrees,
    entreeById
}