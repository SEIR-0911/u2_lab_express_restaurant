// appetizersController.js
const appetizersData = require('../data/appetizersData');

exports.index = (req, res) => {
  res.json(appetizersData);
};

exports.show = (req, res) => {
  const id = parseInt(req.params.id);
  const appetizer = appetizersData.find(item => item.id === id);

  if (appetizer) {
    res.json(appetizer);
  } else {
    res.status(404).json({ error: 'Appetizer not found' });
  }
};