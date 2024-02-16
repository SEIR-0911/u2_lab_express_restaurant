const express = require('express');
const app = express();
const port = 3000;

// Controllers
const appetizersController = require('./controllers/appetizersController');
const entreesController = require('./controllers/entreesController');
const dessertsController = require('./controllers/dessertsController');

// Index routes
app.get('/appetizers', appetizersController.index);
app.get('/entrees', entreesController.index);
app.get('/desserts', dessertsController.index);

// Show routes
app.get('/appetizers/:id', appetizersController.show);
app.get('/entrees/:id', entreesController.show);
app.get('/desserts/:id', dessertsController.show);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
