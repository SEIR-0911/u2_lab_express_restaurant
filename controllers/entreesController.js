const entrees = [
    {name: "Pork Tenderloin",
    price: 21,
    glutenFree: true,
    id: "987"},

    {name: "Salmon",
    price: 18,
    glutenFree: false,
    id: "654"},

    {name: "Scallops",
    price: 23,
    glutenFree: true,
    id: "321"}
]

//Index Route
const getEntrees = (req, res) => {res.send(entrees)}

//Show Route
//By ID
const getEntreeById = (req, res) => {
    let found = entrees.find((entree) => entree.id === req.params.id)
        if (found) {
            res.send(`${found.name} is available for $${found.price}.`)
        } else {
            res.send(req.params.id +`is not found.`)
        }
} 
//By Gluten Free
const getGFEntrees = (req,res) => {
    let gfEntrees = []
    let getGFEntrees = entrees.forEach((entree) => {
        if (entree.glutenFree === true) {
            gfEntrees.push(entree)}
        })
    res.send(gfEntrees)
}

//Export module functions
module.exports = {getEntrees, getEntreeById, getGFEntrees}