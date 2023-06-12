var data =  require("./fakeData");

module.exports = function(req, res) {
  
    const name = req.query.name;
    const index = data.findIndex(user => user.name === name);

    if(index !== -1) {
        data.splice(index, 1);
    }
    
    res.send("success");
};