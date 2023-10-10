const entrees = [
    {
        name: 'Pizza',
        price: 13,
        isVegan: false
    },
    {
        name: 'Lasagna',
        price: 15,
        isVegan: false
    },
    {
        name: 'Impossible Burger',
        price: 16,
        isVegan: true
    }
]

const getEntrees = (req, res) => {
    res.send(entrees)
}

const getOneEntree = (req, res) => {
    res.send(entrees[req.params.id])
}

module.exports = {
    getEntrees,
    getOneEntree
}