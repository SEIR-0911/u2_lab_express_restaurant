const appetizerController = require("./AppetizerController.js");
const entreeController = require("./EntreeController.js");
const dessertController = require("./DessertController.js");

const appetizerList=appetizerController.appetizers
const entreeList=entreeController.entrees

const completeMenu={
    appetizerList,
    entreeList
}

const getMenu = (req, res) => {
    res.send(completeMenu)

  }


module.exports = {
    getMenu
  }