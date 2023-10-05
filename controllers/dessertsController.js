const desserts = [
    {
        id: 1,
        item: 'Chocolate Lava Cake',
        allergens: ['wheat', 'dairy', 'tree nuts'],
        price_dollars: 6,
        vegan: false
    },
    {
        id: 2,
        item: "Ardyn's Strawberry Shortcake",
        allergens: ['wheat'],
        price_dollars: 6,
        vegan: true
    },
    {
        id: 3,
        item: 'Carrot Cake',
        allergens: ['wheat', 'egg', 'dairy'],
        price: 6,
        vegan: false
    }
]

const getDesserts = (req, res) =>{
    res.send(desserts)
}

const dessertById = (req, res) => {
    res.send(desserts.find((dessert) => dessert.id == req.params.id))
}

module.exports = {
    getDesserts,
    dessertById
}