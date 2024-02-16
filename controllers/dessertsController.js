// dessertsController.js
const dessertsData = require('../data/dessertsData');

exports.index = (req, res) => {
  res.json(dessertsData);
};

exports.show = (req, res) => {
  const id = parseInt(req.params.id);
  const desserts = dessertsData.find(item => item.id === id);

  if (desserts) {
    res.json(desserts);
  } else {
    res.status(404).json({ error: 'Desserts not found' });
  }
};