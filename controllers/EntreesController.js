const entrees = [
    { name: "bbq bacon burger",
     protein: "beef",
     price: "$15", 
     veganOption: false },
    { name: "chicken parm",
    protein: "chicken",
    price: "$22", 
    veganOption: false },
    { name: "chef salad",
    protein: "veggie",
    price: "$14", 
    veganOption: true },
  ]  

const getAllEntrees = (req, res) => {
    res.send(entrees)
}

const getOneEntree = (req, res) => {
    res.send(entrees[req.params.id])
}

module.exports = {
    getAllEntrees,
    getOneEntree
}