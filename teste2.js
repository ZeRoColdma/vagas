var data =  require("./fakeData");

module.exports = function(req, res){
  
    const { name, job, admin } = req.body;
    
    const newUser = {
        id: data.length + 1,
        name,
        job,
        admin
    };

    data.push(newUser);
    
    res.send(newUser);

};