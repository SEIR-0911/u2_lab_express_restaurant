const entrees = [
    {
        name: `Deep-Dish`,
        priceUSD: 25,
        category: `pizza`
    }, 
    {
        name: `Pasta`,
        priceUSD: 14,
        category: `pasta`
    }, 
    {
        name: `Tavern-Cut`,
        priceUSD: 20,
        category: `Pizza`
    }, 
]


const index = (req,res) => {
    res.send(entrees)
}

//app.get(`/entrees/pizza/:name`, entreeController.pizzaByName)
//array.toLowerCase()
const pizzaByName = (req, res) => {
    const pizzas = entrees.filter((entree) => entree.category.toLowerCase() == `pizza`)

    // if (req.params.name==false) {
    //     return res.send(pizzas)
    // } else {
        const pizzaIndex = pizzas.findIndex(element => element.name.toLowerCase() == req.params.name.toLowerCase()) 
        pizzaIndex == -1 ? res.send(`ERROR - This pizza is unavailable`) : res.send(pizzas[pizzaIndex])
    // }
}

const byID = (req, res) => {
    res.send(entrees[req.params.id])
}


module.exports = {
    index,
    byID,
    pizzaByName
}