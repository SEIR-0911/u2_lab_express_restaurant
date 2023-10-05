const appetizers = [
    {
        id: 1,
        item: 'Spinach Artichoke Dip',
        allergens: ['wheat', 'dairy'],
        price_dollars: 3.50,
        vegan: false
    },
    {
        id: 2,
        item: 'Fried Calamari',
        allergens: ['seafood'],
        price_dollars: 5,
        vegan: false
    },
    {
        id:3,
        item: 'Pretzels and Beer Cheese',
        allergens: ['wheat', 'dairy'],
        price: 4,
        vegan: false
    }
]

const getAppets = (req, res) => {
    res.send(appetizers)
}

const appetizerById = (req, res) => {
    res.send(appetizers.find((appetizer) => appetizer.id == req.params.id))
}

module.exports = {
    getAppets,
    appetizerById
}