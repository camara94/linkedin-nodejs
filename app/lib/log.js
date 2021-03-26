exports.logContent = (content)=>{
    console.log(content);
    return content;
}

exports.msgCallbackErr = (e, res) => {
    console.error(e);
    res
      .status(500)
      .send('Le fichier est manquant');
    throw new Error('Le fichier est manquant');
  }
