const desserts = [
    {
        name: 'Chocolate Cake',
        price: 8,
        glutenFree: false
    },
    {
        name: 'Cheesecake',
        price: 10,
        glutenFree: false
    },
    {
        name: 'Fruit Salad',
        price: 6,
        glutenFree: true
    }
]

const getDesserts = (req, res) => {
    res.send(desserts)
}

const getDessertById = (req, res) => {
    const dessertId = req.params.id
    if (dessertId < desserts.length) {
        res.send(desserts[dessertId])
    } else {
        res.status(404).send('Dessert not found')
    }
}

module.exports = {
    getDesserts,
    getDessertById
}
