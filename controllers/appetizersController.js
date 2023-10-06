const appetizers = [
    {name: "Calamari",
    price: 14,
    glutenFree: false,
    id: "123"},

    {name: "Charcuterie Board",
    price: 22,
    glutenFree: false,
    id: "456"},

    {name: "Stuffed Peppers",
    price: 12,
    glutenFree: true,
    id: "789"},
]

//Index Route
const getApps = (req, res) => {res.send(appetizers)} 

//Show Route
//By ID
const getAppById = (req, res) => {
    //array.find will return the array object by id.
    let found = appetizers.find((appetizer) => appetizer.id === req.params.id)
    if (found) {
    res.send(`${found.name} is available for $${found.price}.`)
    } else {
    res.send(`${req.params.id} is not found.`)
    }
}
//By Gluten Free
const getGFApps = (req,res) => {
    let gfApps = []
    let getGFApps = appetizers.forEach((appetizer) => {
        if (appetizer.glutenFree === true) {
            gfApps.push(appetizer)}
        })
    res.send(gfApps)
}

//Export module functions
module.exports = {getApps, getAppById, getGFApps

}