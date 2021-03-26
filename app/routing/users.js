let userController = require('../controllers/userController');
//Création de User
app.post('/users', userController.createUser);

//Mise à jour de User
app.put('/users', userController.userUpdate);


//Récuperation de User
app.get('/users', userController.users);
app.get('/users/:name', userController.userOne);


