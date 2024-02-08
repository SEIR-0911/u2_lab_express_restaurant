const desserts = [
    {
        name : 'lava cake',
        vegan : false,
        price : 9.99
    },
    {
        name : 'cookie pizza',
        vegan : false,
        price : 7.99
    },
    {
        name : 'icecream sundae',
        vegan : false, 
        price : 7.99
    },
    {
        name : 'vegan brownies',
        vegan : true,
        price : 8.99 
    }
]

const getDesserts = (req, res) => {
    req.query.name == null ? res.send( {msg: desserts } ) : res.send(desserts.filter(x => x.name === req.query.name))
}

const getDessertsById = (req, res) => {
    res.send(desserts[req.params.id])
}

module.exports = {
    getDesserts,
    getDessertsById
}