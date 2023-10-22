const appetizers = [
    {
        name: 'Mozerella Sticks',
        price: 10,
        spicy: false
    },
    {
        name: 'Garlic Knots',
        price: 8,
        spicy: false
    },
    {
        name: 'Jalapeno Poppers',
        price: 12,
        spicy: true
    }
]

const getAppetizers = (req, res) => {
    res.send(appetizers)
}

const getAppetizerById = (req, res) => {
    res.send(appetizers[req.params.id])
}

module.exports = {
    getAppetizers,
    getAppetizerById
}