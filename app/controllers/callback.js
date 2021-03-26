exports.callback = (req, res) => {
    let returnResponseOfFileJson = (content)=>{
        return res.json(content);
    }
    fs.readFileAsync('test2.json')
      .then(logLib.logContent)
      .then(JSON.parse)
      .catch(e => logLib.msgCallbackErr(e, res))
      .done(returnResponseOfFileJson);

    console.log('Autre façon de faire encore');
}