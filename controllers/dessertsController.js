const Desserts =[
    {
        "id": 5678,
        "DessertName": "Chocolate Cake",
        "overallRating": "4.7 stars",
        "sweetnessLevel": "High",
        "texture": "Moist"
    },
    {   "id": 91011,
        "DessertName": "Strawberry Cheesecake",
        "overallRating": "4.9 stars",
        "sweetnessLevel": "Medium",
        "texture": "Creamy"
    },
    {   "id": 121314,
        "DessertName": "Apple Pie",
        "overallRating": "4.6 stars",
        "sweetnessLevel": "Medium",
        "texture": "Flaky"
    }
];

console.log(Desserts)

const getDesserts = (req, res) => {
    res.send(Desserts)
}

const getDessert = (req, res) => {
    res.send(Desserts[req.params.id])
}

module.exports = {
    getDesserts,
    getDessert
}