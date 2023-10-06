const appetizers = [
    {   
        "id": 12,
        "appetizerName": "Mozzarella Sticks",
        "overallRating": "4.5 stars",
        "lovesPeople": true,
        "spicinessLevel": "Mild",
        "crispyTexture": true
    },
    {   
        "id": 123,
        "appetizerName": "Chicken-Wings",
        "overallRating": "4.2 stars",
        "lovesPeople": true,
        "spicinessLevel": "Medium",
        "crispyTexture": true
    },
    {   
        "id": 1234,
        "appetizerName": "Spinach Artichoke Dip",
        "overallRating": "4.8 stars",
        "lovesPeople": true,
        "spicinessLevel": "Mild",
        "creamyTexture": true
    }
]

console.log(appetizers)

const getAppetizers = (req, res) => {
    res.send(appetizers)
}

const getAppetizer = (req, res) => {
    res.send(appetizers[req.params.id])
}

// In appetizersController.js
const getAppetizerByName = (req, res) => {
    const nameToSearch = req.params.name;
    // Find the appetizer with the matching name
    const matchingAppetizer = appetizers.find(appetizer => appetizer.appetizerName === nameToSearch);
    if (matchingAppetizer) {
        res.send(matchingAppetizer);
    } else {
        res.status(404).send('Appetizer not found');
    }
}


module.exports = {
    getAppetizers,
    getAppetizer,
    getAppetizerByName
}