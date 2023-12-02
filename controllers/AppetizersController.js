const appetizers = [
    {
        name: 'jalapeno poppers',
        priceInUSD: 6.99,
        vegetarian: true
    },
    {
        name: 'fried pickle chips',
        priceInUSD: 6.99,
        vegetarian: true
    },
    {
        name: 'onion rings',
        priceInUSD: 7.99,
        vegetarian: true
    }
]

const getAppetizers = (req, res) => {
    res.send(appetizers)
}

const getOneApp = (req, res) => {
    res.send(appetizers[req.params.id])
}

const getAppByName = (req, res) => {
    const appIndex = appetizers.findIndex(el => el.name == req.params.name)
    appIndex == -1 ? res.send('This app does not exsist') : res.send(appetizers[appIndex])
}

module.exports = {
    appetizers,
    getAppetizers,
    getOneApp,
    getAppByName
}