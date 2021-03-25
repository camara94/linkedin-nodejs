let userController = require('../controllers/userController');
app.get('/users', userController.users);
app.get('/users/1', userController.userOne);