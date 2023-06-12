var data =  require("./fakeData");

module.exports = (req, res) => {
    const id = req.query.id;
    const { name, job } = req.body;

    let reg = data.find(d => d.id == id);

    if(reg) {
        reg.name = name;
        reg.job = job;
        res.send(reg);
    } else {
        res.status(404).send({ error: "Registro não encontrado" });
    }
};