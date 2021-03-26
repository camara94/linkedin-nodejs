let userController = require('../controllers/userController');
//Création de User
app.post('/users', userController.createUser);

//Mise à jour de User
app.put('/users', userController.userUpdate);


// Suppression de User
app.delete('/users/:_id', userController.deleteUser);

//Récuperation de User
app.get('/users', userController.users);
app.get('/users/:name', userController.userOne);


