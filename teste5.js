var data =  require("./fakeData");

module.exports = function(req, res){
    
    const name =  req.query.name;
    const index = data.find(user => user.name === name);
    res.send(`Usuário ${name} foi lido ${index.access} vezes.`);

};