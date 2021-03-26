let userController = require('../controllers/userController');
app.get('/users', userController.users);
app.get('/users/:name', userController.userOne);