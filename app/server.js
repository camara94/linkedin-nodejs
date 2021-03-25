var path = require('path');
var express = require('express');
fs = require('fs');

var app = express();

app.use(express.static('public'));

app.get('/callback', (req, res)=>{
    fs.readFile('test.json', (err, content)=>{
        console.log(content);
        res.json(content);
    })

    console.log('Autre façon de faire encore');
})
app.get('/users', function (req, res) {
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
            "name":"Valentino",
            "lastname":"Anna",
            "age":"23",
            "job":"Secretary",
            "tel":"0123456789"
        };

    res.json(user);
});

app.listen(8080);