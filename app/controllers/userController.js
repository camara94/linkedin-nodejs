exports.users = (req, res) => {
    let retourJSON = obj => res.json(obj);
    models
          .User
          .find()
          .sort({name:1})
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