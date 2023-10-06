const desserts = [
    {
        name: 'brownie',
        priceInUSD: 10.99,
        vegetarian: true
    },
    {
        name: 'hot fudge sundae',
        priceInUSD: 15.99,
        vegetarian: true
    },
    {
        name: 'chocolate cake',
        priceInUSD: 12.99,
        vegetarian: true
    }
]

const getDesserts = (req, res) => {
    res.send(desserts)
}
const getOneDessert = (req, res) => {
    res.send(desserts[req.params.id])
}
const getDessertByName = (req, res) => {
    const dessertIndex = desserts.findIndex(el => el.name == req.params.name)
    dessertIndex == -1 ? res.send('This dessert does not exsist') : res.send(desserts[dessertIndex])
}

module.exports = {
    desserts,
    getDesserts,
    getOneDessert,
    getDessertByName
}