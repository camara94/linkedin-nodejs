let userController = require('../controllers/userController');
app.post('/users', userController.createUser);
app.get('/users', userController.users);
app.get('/users/:name', userController.userOne);

