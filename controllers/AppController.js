const apps = [
   {
      name: "Mozarella Sticks",
      price: 11,
      description: "Fried cheese sticks",
      tastesGood: true
   },
   {
      name: "Crab Rangoons",
      price: 16,
      description: "Fried wonton wraps filled with crabmeat, served with duck sauce",
      tastesGood: true
   },
   {
      name: "Wings",
      price: 10,
      description: "Crispy wings served with your choice of sauce: Buffalo, BBQ, Garlic-Parm, or Sweet chili",
      tastesGood: true
   },
   {
      name: "Warm Pretzles",
      price: 12,
      description: "Soft, Warm pretzel served with hot beer cheese for dipping",
      tastesGood: true
   },
   {
      name: "Potato Skins",
      price: 10,
      description: "Served either stuffed with just cheese or loaded",
      tastesGood: true
   }
]


const getApps = (req, res) => {
   res.send(apps)
}

const getOneApp = (req, res) => {
   res.send(apps[req.params.id])
}



module.exports = {
   getApps,
   getOneApp
}