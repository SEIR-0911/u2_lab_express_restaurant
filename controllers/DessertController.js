
const desserts = [
    { name: "Tiramisu",
     price:13, 
     vegan: false },
    { name: "Cheesecake", 
    price: 7, 
    vegan: false },
    { name: "Chocolate Cake", 
    price: 9, 
    vegan: false },
  ];
  
  
  


const getDesserts = (req, res) => {
    res.send(desserts)

  }
  const getDessert = (req, res) => {
    let id = req.params.id
    res.send(desserts[id])
  }





  module.exports = {
    getDesserts,
    getDessert
  }