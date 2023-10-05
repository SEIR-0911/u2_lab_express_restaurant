const desserts = [
    {
        name: `Ice Cream`,
        priceUSD: 5,
        needsSpoon: true
    }, 
    {
        name: `Cookies`,
        priceUSD: 4,
        needsSpoon: false
    }, 
    {
        name: `Lava Cake`,
        priceUSD: 15,
        needsSpoon: true
    }, 
]


const index = (req,res) => {
    res.send(desserts)
}

const byID = (req, res) => {
    res.send(desserts[req.params.id])
}


module.exports = {
    index,
    byID,
}