var serverController = require('./../controllers/server_controller.js')

module.exports = function(app){
  app.post('/register', serverController.register);
	app.post('/login', serverController.login);
  app.get('/logout', serverController.logout);
  app.get('/current', serverController.current);
  app.get('/users', serverController.getUsers);
  app.get('/buckets', serverController.getBuckets);
  app.post('/bucket', serverController.createBucket);
  // app.get('/user/:id', serverController.showUser);
}
