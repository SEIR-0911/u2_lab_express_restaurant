const entrees = [
    {
        name: 'Schnitzel',
        ingredients: [`Chicken Schnitzel`, `Pickeld Red Cabbage`, `Perserved Lemon Tahina`, `Zhug`],
        price: 23,
        isVegan: false,
        withPita: false
    },
    {
        name: 'Moroccan Fish',
        ingredients: [`Seasonal White Fish`, `Tomato-Pepper Sauce`, `Challah`],
        price: 26,
        isVegan: false,
        withPita: true
    },
    {
        name: 'Steak',
        ingredients: [`Charcoaled`, `Zhug-Marinated Strip Steak`, `Cipolline Onions`],
        price: 36,
        isVegan: false,
        withPita: false
    },
]

const getEntrees = (req, res) => {
    res.send(entrees)
}

const getEntree = (req, res) => {
    res.send(entrees[req.params.id])
}

module.exports = {
    getEntrees,
    getEntree
}