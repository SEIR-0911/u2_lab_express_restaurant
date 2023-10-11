const apps = [
    { 
        app: "Cheese Sticks",
        description: "",
        price: `$${15}`,
    },
    {
        name: "Fried Pickles",
        description: "",
        price: `$${15}`, 
    },
    { 
        name: "Artichoke Dip",
        description: "",
        price: `$${25}`,  
    },
  ];


const getApps = (req, res) => {
    res.send({apps})
}

const getApp = (req, res) => {
    res.send(apps[req.params.id])
}

const a4m = (req, res) => {
    let dIndex = Math.floor(Math.random() * apps.length)
    res.send(apps[dIndex])
}

module.exports = {
    getApps,
    getApp,
    a4m
} 