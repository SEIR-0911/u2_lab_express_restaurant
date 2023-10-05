const Entrees =[
    {
        "id": 161718,
        "EntreeName": "Grilled Salmon",
        "overallRating": "4.7 stars",
        "spicinessLevel": "Low",
        "proteinSource": "Fish"
    },
    {
        "id": 192021,
        "EntreeName": "Chicken Alfredo",
        "overallRating": "4.5 stars",
        "spicinessLevel": "Low",
        "proteinSource": "Chicken"
    },
    {
        "id": 222324,
        "EntreeName": "Vegetable Stir-Fry",
        "overallRating": "4.6 stars",
        "spicinessLevel": "Medium",
        "proteinSource": "Mixed Vegetables"
    }
]

console.log(Entrees)

const getEntrees = (req, res) => {
    res.send(Entrees)
}

const getEntree = (req, res) => {
    res.send(Entrees[req.params.id])
}

module.exports = {
    getEntrees,
    getEntree
}