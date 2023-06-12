var data =  require("../fakeData");


module.exports = function validate(req, res, next){
      
    const name = req.query.name;
    const user = data.find(user => user.name === name);

    if(!user || user.admin === false){
        return res.status(401).send("Acesso não autorizado");
    }

    next();

}