const appetizers = [
    {
        name: `Soup`,
        priceUSD: 6,
        needsSpoon: true,
    }, 
    {
        name: `Caviar`,
        priceUSD: 40,
        needsSpoon: true
    }, 
    {
        name: `Bruschetta`,
        priceUSD: 10,
        needsSpoon: false
    }, 
]

const index = (req,res) => {
    res.send(appetizers)
}

const byName = (req, res) => {
    const appetizerIndex = appetizers.findIndex(element => element.name == req.params.name)
    appetizerIndex == -1 ? res.send(`ERROR - This appetizer is unavailable`) : res.send(appetizers[appetizerIndex])
}

const byID = (req, res) => {
    res.send(appetizers[req.params.id])
}



module.exports = {
    index,
    byID,
    byName
}
