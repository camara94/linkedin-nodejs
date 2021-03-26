exports.users = (req, res) => {
    let retourJSON = obj => res.json(obj);
    models
          .User
          .find()
          .sort({name:1})
          .select('name lastname age -_id')
          .limit(2)
          .execAsync()
          .then( obj => logLib.logContent(obj) )
          .then( obj => retourJSON(obj) )
          .catch( err => console.error(err) );
}
exports.userOne =  (req, res) => {
    let option = {name: req.params.name};
    let retourJSON = content => res.json(content);

    models
          .User
          .findOneAsync(option)
          .then((obj)=> logLib.logContent(obj))
          .then((obj)=>retourJSON(obj))
}

exports.createUser = (req, res) => {
    newUser = req.body;
    models
          .User( newUser )
          .save()
          .then( (obj) => logLib.logContent(obj) )
}

exports.userUpdate = (req, res) => {

    let retourJSON = obj => res.json(obj);

    let option = {_id: req.body._id};

    printObj = models
                     .User
                     .findOneAsync(req.body)
                     .then( obj => retourJSON( obj ) );

    delete req.body['_id'];

    models
          .User
          .findOneAndUpdate(option, req.body)
          .then( printObj => retourJSON(printObj) )
          .then( obj => logLib.logContent(obj) )

    //console.log(req.body)

}