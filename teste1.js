var data =  require("./fakeData");

const getUser = ( req, res, next ) => {
    const name = req.query.name;
    const user = data.find(user => user.name === name);

    
    if(user) {
        count = user.access;
        user.access = count + 1;
        res.send(user);
    }
};

const getUsers = ( req, res, next ) => {
    res.send(data); 
};

module.exports = {
    getUser,
    getUsers
};