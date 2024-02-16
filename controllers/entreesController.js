// entreesController.js
const entreesData = require('../data/entreesData');

exports.index = (req, res) => {
  res.json(entreesData);
};

exports.show = (req, res) => {
  const id = parseInt(req.params.id);
  const entrees = entreesData.find(item => item.id === id);

  if (entrees) {
    res.json(entrees);
  } else {
    res.status(404).json({ error: 'Entrees not found' });
  }
};