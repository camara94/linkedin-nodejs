exports.callback = (req, res) => {
    let returnResponseOfFileJson = (content)=>{
        return res.json(content);
    }
    fs.readFileAsync('test.json')
      .then(logLib.dehor)
      .then(JSON.parse)
      .then(returnResponseOfFileJson);

    console.log('Autre façon de faire encore');
}