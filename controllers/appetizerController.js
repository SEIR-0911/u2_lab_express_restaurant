const appetizers = [
    {
        name: 'Calamari',
        price: 11,
        isVegan: false
    },
    {
        name: 'Chips and Salsa',
        price: 8,
        isVegan: true
    },
    {
        name: 'Fried Okra',
        price: 8,
        isVegan: true
    }
]

const getAppetizers = (req, res) => {
    res.send(appetizers)
}

const getOneAppetizer = (req, res) => {
    res.send(appetizers[req.params.id])
}

module.exports = {
    getAppetizers,
    getOneAppetizer
}