const desserts = [
   {
      name: "Cheesecake",
      price: 12,
      description: "Creamy, dense cheesecake",
      tastesGood: true
   },
   {
      name: "Brownie with Ice cream",
      price: 10,
      description: "Its just that, a brownie with ice cream",
      tastesGood: true
   },
   {
      name: "Creme brule",
      price: 14,
      description: "Light, creamy cream",
      tastesGood: true
   },
]


const getDesserts = (req, res) => {
   res.send(desserts)
}

const getOneDessert = (req, res) => {
   res.send(desserts[req.params.id])
}



module.exports = {
   getDesserts,
   getOneDessert
}