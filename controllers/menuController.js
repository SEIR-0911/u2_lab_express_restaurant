const Appetizers = require('../mockdata/appetizers');
const Entrees = require('../mockdata/entrees');
const Desserts = require('../mockdata/desserts');

module.exports = {
    getAppetizers,
    getOneAppetizers,
    getEntrees,
    getOneEntree,
    getDesserts,
    getOneDessert
};

//Appetizers
async function getAppetizers(req, res) {
    try {
        console.log("Appetizers menu", Appetizers);
        res.send(Appetizers);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
}

async function getOneAppetizers(req, res) {
    try {
        let appetizerId = req.params.id;
        console.log("find appetizer by ID: ", appetizerId);
        res.send(Appetizers.find(appetizer => appetizer.app_id === Number(req.params.id)));
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
}

//Entrees
async function getEntrees(req, res) {
    try {
        console.log("Entrees menu", Entrees);
        res.send(Entrees);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
}

async function getOneEntree(req, res) {
    try {
        let entreeId = req.params.id;
        console.log("find entree by ID: ", entreeId);
        res.send(Entrees.find(entree => entree.entr_id === Number(req.params.id)));
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
}

//Desserts
async function getDesserts(req, res) {
    try {
        console.log("Desserts menu", Desserts);
        res.send(Desserts);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
}

async function getOneDessert(req, res) {
    try {
        let dessertId = req.params.id;
        console.log("find Desserts by ID: ", dessertId);
        res.send(Desserts.find(dessert => dessert.des_id === Number(req.params.id)));
    } catch (error) {
        console.log(error);
        return res.status(500).send(error.message);
    }
}