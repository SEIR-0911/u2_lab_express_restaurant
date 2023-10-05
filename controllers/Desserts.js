//12 create arrays in Appetizers.js/Desserts.js/Entrees.js
const desserts = [
    {
    dish: "Bhapa Doi",
    desc: "housemade sweet yogurt, jaggery",
    price: 9,
    vegan: false,
    gluten_free: false,
    nuts: false
    },
    {
    dish: "Bhapa Doi 2",
    desc: "housemade sweet yogurt, jaggery",
    price: 9,
    vegan: false,
    gluten_free: false,
    nuts: false
    },
    {
    dish: "Bhapa Doi 3",
    desc: "housemade sweet yogurt, jaggery",
    price: 9,
    vegan: false,
    gluten_free: false,
    nuts: false
    }
]

//8 create function that will handle different HTTP requests getApps/getEnts/getDesserts will accept request and response as an argument.
const getDesserts = (req, res) => {
    res.send({desserts})
}

const getDessert = (req, res) => {
    res.send(desserts[req.params.id])
}

//9 export modules

module.exports = {
    getDesserts,
    getDessert
}
