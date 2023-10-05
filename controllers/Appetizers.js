//12 create arrays in Appetizers.js/Desserts.js/Entrees.js
const apps = [
    {
    dish: "Dahi Vada" ,
    desc: "fermented lentil dumpling, sweet & savory yogurt, roasted cumin",
    price: 11,
    vegan: true,
    gluten_free: true,
    nuts: false
    },
    {
    dish: "Sabudana Vada" ,
    desc: "tapioca pearls, peanuts, spiced potatoes, yogurt chutney",
    price: 11,
    vegan: false,
    gluten_free: true,
    nuts: true
    },
    {
    dish: "Macher Dim",
    desc: "seasonal Bengali fish roe, kalajeera rice, egg yolk, ghee, green chili",
    price: 23,
    vegan: false,
    gluten_free: true,
    nuts: false
    } ,
    {
    dish: "Bhetki Paturi",
    desc: "banana leaf wrapped bhetki (fish), mustard-poppy paste",
    price: 19,
    vegan: false,
    gluten_free: true,
    nuts: false
    }
]

//8 create function that will handle different HTTP requests getApps/getEnts/getDesserts will accept request and response as an argument.
const getApps = (req, res) => {
    res.send({apps})
}
const getApp = (req, res) => {
    res.send(apps[req.params.id])
}

//9 export modules
module.exports = {
    getApps,
    getApp
}