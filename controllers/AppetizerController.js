const appetizers = [
    {
        name: "crab cakes",
        flavor: "Our crab cakes are a delectable blend of fresh crab meat, flavorful spices, and a perfect golden crust.",
        price: '$13.99',
        inStock: false
    },
    {
        name: "bruschetta",
        flavor: "Our bruschetta features toasted bread topped with vibrant tomatoes, fresh basil, garlic, and a drizzle of balsamic glaze for a burst of Mediterranean flavors.",
        price: '$12.59',
        inStock: true
    },
    {
        name: "shrimp cocktail",
        flavor: "Our shrimp cocktail presents chilled shrimp served with zesty cocktail sauce, creating a refreshing and appetizing seafood delight.",
        price: '$16.35',
        inStock: true
    },
];

const getAppetizers = (req, res) => {
    res.send(appetizers)
}
const getAppetizer = (req, res) => {
    res.send(appetizers[req.params.id])
}

module.exports  = {
    getAppetizers,
    getAppetizer
}