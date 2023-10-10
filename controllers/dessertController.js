const desserts = [
    {
        name: 'Vegan Ice Cream',
        price: 20,
        isVegan: true
    },
    {
        name: 'Fudge Cake',
        price: 12,
        isVegan: false
    },
    {
        name: 'Creme Brulee',
        price: 14,
        isVegan: false
    }
]

const getDesserts = (req, res) => {
    res.send(desserts)
}

const getOneDessert = (req, res) => {
    res.send(desserts[req.params.id])
}

module.exports = {
    getDesserts,
    getOneDessert
}