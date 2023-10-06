const desserts = [
    {
        name: "molten lava cake",
        description: "Our molten lava cake is a rich, indulgent chocolate dessert with a gooey, oozing center, served with a scoop of our house-made vanilla  icecream.",
        price: '$10.29',
        inStock: false
        
    },
    {
        name: "ice cream",
        description: "Our ice cream epitomizes culinary artistry—each spoonful revealing a perfect balance of flavors and textures, meticulously crafted for a refined indulgence.editerranean flavors.",
        price: '$5.49',
        inStock: true
        
    },
    {
        name: "chocolate chip cookies",
        description: "Our chocolate chip cookies are a symphony of textures and flavors, featuring a perfect blend of buttery dough and luscious chocolate chips, achieving a delightful and comforting treat.(serves: 2)",
        price: '$3.99',
        inStock: true
        
    },
];

const getDesserts = (req, res) => {
    res.send(desserts)
}
const getDessert = (req, res) => {
    res.send(desserts[req.params.id])
}

module.exports  = {
    getDesserts,
    getDessert
}