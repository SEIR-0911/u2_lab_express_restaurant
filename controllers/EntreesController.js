const entrees = [
    {
        name: 'burger',
        priceInUSD: 14.99,
        vegetarian: false
    },
    {
        name: 'veggie burger',
        priceInUSD: 12.99,
        vegetarian: true
    },
    {
        name: 'chicken wings',
        priceInUSD: 13.99,
        vegetarian: false
    }
]

const getEntrees = (req, res) => {
    res.send(entrees)
}
const getOneEntree = (req, res) => {
    res.send(entrees[req.params.id])
}
const getEntreeByName = (req, res) => {
    const entreeIndex = entrees.findIndex(el => el.name == req.params.name)
    entreeIndex == -1 ? res.send('This entree does not exsist') : res.send(entrees[entreeIndex])
}

module.exports = {
    entrees,
    getEntrees,
    getOneEntree,
    getEntreeByName
}