//12 create arrays in Appetizers.js/Desserts.js/Entrees.js
const entrees = [
    {
    dish: "Beguner Khagina",
    desc: "roasted & smashed eggplant, cumin, soft egg, pao",
    price: 19,
    vegan: false,
    gluten_free: false,
    nuts: false
    },
    {
    dish: "Morog Boti",
    desc: "bone-in chicken, garam masala, red chili, mint chutney",
    price: 18,
    vegan: false,
    gluten_free: true,
    nuts: false
    },
    {
    dish: "Keema Kaleji",
    desc: "goat mince & liver, black cardamom, cloves, soft egg, pao",
    price: 19,
    vegan: false,
    gluten_free: false,
    nuts: false
    }
]

//8 create function that will handle different HTTP requests getApps/getEnts/getDesserts will accept request and response as an argument.
const getEnts = (req, res) => {
    res.send({entrees})
}
const getEnt = (req, res) => {
    res.send(entrees[req.params.id])
}


//9 export modules
module.exports = {
    getEnts,
    getEnt
}