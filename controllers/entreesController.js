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

// In appetizersController.js
const getEntreeByName = (req, res) => {
    const nameToSearch = req.params.name;
    // Find the appetizer with the matching name
    const matchingEntree = Entrees.find(Entree => Entree.EntreeName === nameToSearch);
    if (matchingEntree) {
        res.send(matchingEntree);
    } else {
        res.status(404).send('Entree not found');
    }
}

module.exports = {
    getEntrees,
    getEntree,
    getEntreeByName
}