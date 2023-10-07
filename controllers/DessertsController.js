
const desserts = [
    { 
        name: "Chocolate Cake",
        price: 11.99, 
        isVegetarian: true },
    { 
        name: "Ice Cream",
        price: 7.99, 
        isVegetarian: false },
    { 
        name: "Pie",
        price: 10.99, 
        isVegetarian: 'who knows' },
  ];
 
  const getDesserts = (req, res) => {
    res.send(desserts)
  }

  const getDessert = (req, res) => {
    res.send(desserts[req.params.id])
  }

  module.exports = {
    getDessert,
    getDesserts
  }