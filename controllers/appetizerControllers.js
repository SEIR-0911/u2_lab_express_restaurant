

const appetizers = [
    { name : 'calamari',
      vegan : false,
      price: 9.99},
    { name : 'deviled eggs',
      vegan : false,
      price: 8.99},
    { name : 'salad',
      vegan : false,
      price : 8.99},
    { name : 'bread sticks',
      vegan : true,
      price: 5.99}
]

const getAppetizers = (req, res) => {
    req.query.name == null ? res.send( {msg: appetizers } ) : res.send(appetizers.filter(x => x.name === req.query.name))
}

const getAppsById = (req, res) => {
    res.send(appetizers[req.params.id])
} 


module.exports = {
    getAppetizers,
    getAppsById
}