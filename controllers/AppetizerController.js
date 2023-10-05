
const appetizers = [
    { name: "nachos",
     price:8, 
     vegan: false },
    { name: "Cheese Sticks", 
    price: 7, 
    vegan: false },
    { name: "Buffalo Wings", 
    price: 12, 
    vegan: false },
  ];
  
  
  


const getAppetizers = (req, res) => {
    res.send(appetizers)

  }

  const getAppetizer = (req, res) => {
    let id = req.params.id
    res.send(appetizers[id])
  }

  const getAppetizerName = (req, res) => {
    let name = req.params.name

    res.send(name)
  }
//Category, Names
// const getCat = (req, res) => {
//     const categoryIndex = drinksArray.findIndex(element => element.category == req.params.Category)
//     categoryIndex == -1 ? res.send(`ERROR - This drink is unavailable`) : res.send(drinks[categoryIndex].Names)
    
// }




  module.exports = {
    appetizers,
    getAppetizers,
    getAppetizer,
    getAppetizerName
  }