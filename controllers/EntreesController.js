const entrees = [
    { 
        name: "Burger",
        price: 15.99, 
        isVegetarian: false },
    { 
        name: "Pasta",
        price: 14.99, 
        isVegetarian: false },
    { 
        name: "Steak",
        price: 19.99, 
        isVegetarian: 'who knows' },
  ]

const getEntrees = (req, res) => {
    res.send(entrees)
}

const getEntree = (req,res) => {
    res.send(entrees[req.params.id])
}

module.exports = {
    getEntree,
    getEntrees
}
 