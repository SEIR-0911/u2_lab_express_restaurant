const entrees = [
    {
        name : 'homestyle burger',
        vegan : false,
        price : 11.99
    },
    {
        name : 'quesodillas',
        vegan : false,
        price : 9.99
    },
    {
        name : "loaded mac n' cheese",
        vegan : false,
        price : 8.99
    },
    {
        name : 'creamy vegan pasta',
        vegan : true,
        price : 12.99
    }
]

const getEntrees = (req, res) => {
    req.query.name == null ? res.send( {msg: entrees } ) : res.send(entrees.filter(x => x.name == req.query.name))
}

const getEntreesById = (req, res) => {
    res.send(entrees[req.params.id])
}

module.exports = {
    getEntrees,
    getEntreesById
}