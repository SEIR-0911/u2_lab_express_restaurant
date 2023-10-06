const drinks = [
    {
        //let
        category: 'Cocktails',
        names: [
            {
                name: 'Spiced-Oaxaca',
                ingredients: [`Mezcal`, `Chocolate-Bitters`, `West-Indian-Orange-Bitters`, `Smoked-Chilli-Bitters`, `Chai-Syrup` ],
                price: 14
            },
            {
                name: 'Scotch-Chai-Der',
                ingredients: [`Glenfiddich`, `Cherry-Almond`, `Sweet-Vermouth`, `Plum-Bitters`, `Molasses-Bitters`, `House-Apple-Cider`, `Chai-Syrup`],
                price: 17
            },
            {
                name: 'Hawaiin-75',
                ingredients: [`Pau-Maui-Vodka`, `Sparkling-Wine`, `Triple-Sec`, `Pineapple`, `Guava`, `Mango`, `Orange`],
                price: 17
            },
        ],
    },
    {
        category: 'Wines',
        names: [
            {
                name: 'Folk-Machine',
                type: 'Chenin-Blanc',
                region: 'California',
                vintage: 2021,
                price: 12.5,
                priceBottle: 47
            },
            {
                name: 'Cantina-Malena',
                type: 'Gaglioppo',
                region: 'Italy',
                vintage: 2020,
                price: 13,
                priceBottle: 49
            },
            {
                name: 'Ducrot-Auguste',
                type: 'Muscat',
                region: 'Greece',
                vintage: 2020,
                price: 13.5,
                priceBottle: 51
            },
        ],
    },
    {
        category: 'Beer',
        names: [
            {
                name: 'Right-Bee',
                type: 'Cider',
                price: 4.5
            },
            {
                name: 'Cruz-Blanca',
                type: 'Gose',
                price: 4
            },
            {
                name: 'Marz-Tropical-Tiger',
                type: 'IPA',
                price: 6
            },
        ],
    },
]


const index = (req,res) => {
    res.send(drinks)
}

// const byCategory = (req, res) => {
//     const categoryIndex = drinks.findIndex(element => element.category == req.params.category) 
//     res.send(drinks[categoryIndex])
// }


// //app.get(`/drinks/:category/:name`, drinkController.byCategorybyName)
// //Worked with Billy, Kyndal, Logan, Michael, Anthony, Darcy, etc.

//https://stackoverflow.com/questions/59915006/express-route-check-if-req-params-parameter-is-empty#:~:text=You%20can%20use%20a%20simple,undefined%20%2C%200%20%2C%20or%20NaN%20.

const byCategorybyName = (req, res) => {
    
    const categoryIndex = drinks.findIndex(element => element.category == req.params.category) 
    const nameIndex = drinks[categoryIndex].names.findIndex(element => element.name == req.params.name)

    //first check if :name is empty. If so, return the full category
    if (!req.params.name) {
        if (categoryIndex == -1) {
            return res.send(`ERROR - This drink category is unavailable`)
         } else {
            return res.send(drinks[categoryIndex])
         }
    } else //then check for the specific drink
    if ((categoryIndex == -1) || (nameIndex == -1)) {
        res.send(`ERROR - This drink is unavailable`)
    } else {
        res.send(drinks[categoryIndex].names[nameIndex])
    }    
    
}


const byID = (req, res) => {
    res.send(drinks[req.params.id])
}

module.exports = {
    index,
    byID,
    // byCategory,
    byCategorybyName
}













