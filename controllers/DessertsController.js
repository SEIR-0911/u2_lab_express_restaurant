const desserts = [
    { name: "chocolate cake",
     price: "$9", 
     veganOption: false },
    { name: "cheesecake",
    price: "$12", 
    veganOption: false },
    { name: "pudding",
    price: "$6", 
    veganOption: true },
  ]  

const getAllDesserts = (req, res) => {
    res.send(desserts)
}

const getOneDessert = (req, res) => {
    res.send(desserts[req.params.id])
}

module.exports = {
    getAllDesserts,
    getOneDessert
}