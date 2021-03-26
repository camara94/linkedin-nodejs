var path = require('path');
express = require('express');
Promis = require('bluebird');
const bodyParser = require('body-parser');
mongoose = Promis.promisifyAll(require('mongoose'));

logLib = require('./lib/log');
fs = Promis.promisifyAll(require('fs'));

app = express();
mongoose.connect('mongodb://localhost:27017/book_phone');
models = require('./models');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

require('./routing/callback');
require('./routing/users');

//console.log(models.User({name: 'ca'}))

app.listen(8080);