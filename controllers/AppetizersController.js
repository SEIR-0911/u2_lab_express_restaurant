const appetizers = [
    { name: "nachos",
     protein: "beef",
     price: "$7", 
     veganOption: false },
    { name: "wings",
    protein: "chicken",
    price: "$12", 
    veganOption: false },
    { name: "dumplings",
    protein: "beef",
    price: "$8", 
    veganOption: true },
  ]  

const getAllAppetizers = (req, res) => {
    res.send(appetizers)
}

const getOneAppetizer = (req, res) => {
    res.send(appetizers[req.params.id])
}

module.exports = {
    getAllAppetizers,
    getOneAppetizer
}