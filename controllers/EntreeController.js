
const entrees = [
    { name: "Steak",
     price:25, 
     vegan: false },
    { name: "Salmon", 
    price: 20, 
    vegan: false },
    { name: "Eggplant Parmigiana", 
    price: 18, 
    vegan: false },
  ];
  
  
  


const getEntrees = (req, res) => {
    res.send(entrees)

  }

  const getEntree = (req, res) => {
    let id = req.params.id
    res.send(entrees[id])
  }





  module.exports = {
    entrees,
    getEntrees,
    getEntree
  }