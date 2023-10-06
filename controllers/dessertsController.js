const desserts = [
    {name: "Peach Cobbler",
    price: 8,
    glutenFree: false,
    id: "100"},

    {name: "Chocolate Pie",
    price: 6,
    glutenFree: false,
    id: "200"},

    {name: "Gelato Pomelo",
    price: 7,
    glutenFree: true,
    id: "300"}
]

//Index Route
const getDesserts = (req, res) => {res.send(desserts)}

//Show Route
const getDessertById = (req,res) => {
    let found = desserts.find((dessert) => dessert.id === req.params.id)
    if (found) {
        res.send(`${found.name} is available for $${found.price}.`)
    } else {
        res.send(req.params.id + `is not found.`)
    }
}
//By Gluten Free
const getGFDesserts = (req,res) => {
    let gfDesserts = []
    let getGFDesserts = desserts.forEach((dessert) => {
        if (dessert.glutenFree === true) {
            gfDesserts.push(dessert)}
        })
    res.send(gfDesserts)
}

//Export module functions
module.exports = {getDesserts, getDessertById, getGFDesserts}