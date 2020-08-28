const express = require('express');
const UserController = require('./controllers/usercontroller')
const CatalogController = require('./controllers/catalogController')
const routes = express.Router();
const Catalog = require('./models/Catalog');


routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.put('/users/:id', UserController.updateUser);
routes.get('/users/:id', UserController.show);
routes.delete('/users/:id', UserController.delete);

   

routes.post('/catalog', CatalogController.store)
routes.get('/catalog', CatalogController.index)
routes.delete('/catalog/:id', CatalogController.delete)










module.exports = routes;