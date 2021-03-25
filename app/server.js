var path = require('path');
express = require('express');
Promis = require('bluebird');

logLib = require('./lib/log');
fs = Promis.promisifyAll(require('fs'));

app = express();

require('./routing/callback.js');
app.get('/users', (req, res) => {
    var users = [
        {
            "id":"0",
            "name":"Dupont",
            "lastname":"Maurice",
            "age":"55",
            "job":"Technical support",
            "tel":"0123456789"
        },
        {
            "id":"1",
            "name":"Valentino",
            "lastname":"Anna",
            "age":"23",
            "job":"Secretary",
            "tel":"0123456789"
        },
        {
            "id":"2",
            "name":"Barak",
            "lastname":"Shaima",
            "age":"40",
            "job":"Financial assistant",
            "tel":"0123456789"
        }
    ];

    res.json(users);
});

app.get('/users/1', function (req, res) {
    var user =
        {
            "id":"1",
            "name":"Valentino/7841",
            "lastname":"Anna",
            "age":"23",
            "job":"Secretary",
            "tel":"0123456789"
        };

    res.json(user);
});

app.listen(8080);