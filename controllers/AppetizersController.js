

const appetizers = [
    { 
        name: "Brushetta",
        price: 8.99, 
        isVegetarian: true },
    { 
        name: "Wings",
        price: 9.99, 
        isVegetarian: false },
    { 
        name: "Soup of the day",
        price: 5.99, 
        isVegetarian: 'who knows' },
  ];
 


const getAppetizers = (req, res) => {
    res.send(appetizers)
}

const getAppetizer = (req, res) => {
    res.send(appetizers[req.params.id])
}

const getAppetizerByName = (req, res) => {
    if (appetizers.includes(eq.params.name)) {
        res.send()
    }
    
    appetizers.forEach((app) => {
        if (req.params.name == app.name) {
            res.send(app)
        }
    })
    res.send("Item not found")
    
    // res.send(appetizers[req.params.id])
}

module.exports = {
    getAppetizers,
    getAppetizer,
    getAppetizerByName
}
