const desserts = [
    {
        name: "Filet Mignon",
        flavor: "A tender and juicy cut of beef from the tenderloin, typically cooked to the preferred level of doneness and often accompanied by sauces like peppercorn or red wine reduction.",
        price: '$38.64',
        inStock: false
    },
    {
        name: "Chicken Alfredo",
        flavor: " Grilled or sautéed chicken breast served atop a bed of creamy Alfredo pasta, a classic Italian dish loved for its rich and savory flavors.",
        price: '$25.00',
        inStock: true
    },
    {
        name: "Grilled Salmon",
        flavor: "A succulent fillet of salmon, seasoned and grilled to perfection, often served with a variety of sides like vegetables, rice, or potatoes.",
        price: '$34.49',
        inStock: true
    },
];

const getEntrees = (req, res) => {
    res.send(entrees)
}
const getEntree = (req, res) => {
    res.send(entrees[req.params.id])
}

module.exports  = {
    getEntrees,
    getEntree
}