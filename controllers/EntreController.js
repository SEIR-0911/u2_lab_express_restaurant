const entres = [
   {
      name: "Spagetti and Meatballs",
      price: 17,
      description: "Better than mom use to make it",
      tastesGood: true
   },
   {
      name: "New York strip steak",
      price: 26,
      description: "Pan-seared, cooked to your preferrence, with two sides",
      tastesGood: true
   },
   {
      name: "Chicken Parm",
      price: 20,
      description: "Fresh chicken breast, breaded and fried served on top of freshly prepared pasta",
      tastesGood: true
   },

]


const getEntres = (req, res) => {
   res.send(entres)
}

const getOneEntre = (req, res) => {
   res.send(entres[req.params.id])
}



module.exports = {
   getEntres,
   getOneEntre
}