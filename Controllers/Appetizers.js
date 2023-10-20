const appetizers = [
  { id: 1, name: "chips", color: "yellow", savory: true },
  { id: 2, name: "guac", color: "green", savory: true },
  { id: 3, name: "sugar pretzels", color: "brown", savory: false },
];

console.log(appetizers);

//index route: gets all
const getAppetizers = (request, response) => {
  response.send(appetizers);
};

//show route: gets one
const getAppetizer = (req, res) => {
  res.send(appetizers[req.params.index]);
};

//or
const getAppetizerbyID = (req, res) => {
  const id = parseInt(req.params.id);
  const appetizer = appetizers.find((appetizer) => appetizer.id === id);

  if (!appetizer) {
    // If no matching appetizer is found, send a 404 Not Found response
    res.status(404).send("Appetizer not found");
  } else {
    // If a matching appetizer is found, send it as a JSON response
    res.send(appetizer);
  }
};

//console.log(module);

//console.log(module.exports);

//because we installed node modules, there's a module aspect for each js file
//within each module, there's an export object, everything put into that object is then accessible by all files
//including the application.js file!
module.exports = {
  getAppetizers,
  getAppetizer,
  getAppetizerbyID,
};

//console.log(module);

//console.log(module.exports);
