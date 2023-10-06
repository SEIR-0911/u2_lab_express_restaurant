const apps = [
    {
        name: 'Salatim',
        ingredients: [`Labneh`, `Olive Oil`, `Za'atar`, `Spiced Fennel Slaw`, `Baba Ganoush`,`Green Fava Dip`],
        price: 24,
        isVegan: false,
        withPita: true
    },
    {
        name: 'Hummus',
        ingredients: [`Tahina`, `Hard Egg`, `Chickpea`],
        price: 16,
        isVegan: false,
        withPita: true
    },
    {
        name: 'Salad',
        ingredients: [`Mixed Greens`, `Cucumber`, `Olives`, `Barrel-Aged Feta`, `Dates`, `Greek Goddess Dressing`],
        price: 13,
        isVegan: false,
        withPita: false
    },
    {
        name: 'Falafel',
        ingredients: [`Green Falafel`, `Pickled Red Cabbage`, `Tahina`, `Amba`],
        price: 16,
        isVegan: false,
        withPita: false
    },
]

const getApps = (req, res) => {
    res.send(apps)
}

const getApp = (req, res) => {
    res.send(apps[req.params.id])
}

module.exports = {
    getApps,
    getApp
}