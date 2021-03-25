var path = require('path');
express = require('express');
Promis = require('bluebird');

logLib = require('./lib/log');
fs = Promis.promisifyAll(require('fs'));

app = express();

require('./routing/callback.js');
require('./routing/users');

app.listen(8080);