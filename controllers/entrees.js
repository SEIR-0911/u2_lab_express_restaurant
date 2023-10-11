const entrees = [
    { 
        app: "Duck",
        description: "Duck breast, super greasy and doesnt taste that great, but its still kinda good.",
        price: `$${40}`,
    },
    {
        name: "Ribeye",
        description: "Slab of red meat with/without side of rice or seasoned potatoes.",
        price: `$${55}`, 
    },
    { 
        name: "Salmon",  
        description: "Slab of Salmon with/without side of rice or seasoned potatoes.",
        price: `$${28}`,
    },
  ];


  const getEntrees = (req, res) => {
    res.send({entrees})
}

const getEntree = (req, res) => {
    res.send(entrees[req.params.id])
}

const e4m = (req, res) => {
    let dIndex = Math.floor(Math.random() * entrees.length)
    res.send(entrees[dIndex])
}


module.exports = {
    getEntrees,
    getEntree,
    e4m
}