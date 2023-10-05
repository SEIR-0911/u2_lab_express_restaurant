const entrees = [
    {
        name: `Pizza`,
        priceUSD: 15,
        needsSpoon: false
    }, 
    {
        name: `Pasta`,
        priceUSD: 14,
        needsSpoon: false
    }, 
    {
        name: `Steak`,
        priceUSD: 45,
        needsSpoon: false
    }, 
]


const index = (req,res) => {
    res.send(entrees)
}

const byID = (req, res) => {
    res.send(entrees[req.params.id])
}


module.exports = {
    index,
    byID
}