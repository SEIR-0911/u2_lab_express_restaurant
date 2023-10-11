const desserts = [
    { 
        app: "Gulab Jamun",
        description: "Sweet confection with sweet syrup.",
        price: `$${20}`,
    },
    {
        name: "Pecan Pie", 
        description: "Gooey slab, topped with chopped chunks of pecans.",
        price: `$${35}`,
    },
    { 
        name: "Vanilla Ice Cream",
        description: "Hah, Yeah it's basic, but its made in house using fresh vanilla bean.",
        price: `$${25}`,  
    },
  ];


  const getDesserts = (req, res) => {
    res.send({desserts})
}

const getDessert = (req, res) => {
    res.send(desserts[req.params.id])
}

const d4m = (req, res) => {
    let dIndex = Math.floor(Math.random() * desserts.length)
    res.send(desserts[dIndex])
}

module.exports = {
    getDesserts,
    getDessert,
    d4m
}