const { name, description, price, imageurl } = req.body;
const create = (req, res, next) => {
  const db = req.app.get("db");
  db.create_product([name, description, price, imageurl])
    .then(() => res.sendStatus(200))
    .catch(e => {
      res.status(500).status({ errm: "Oh No! Something went wrong." });
      console.log(e);
    });
};
const getOne = (req, res, next) => {
  const db = req.app.get("db");
  db.read_product(req.params.id)
    .then(() => res.status(200).send(product))
    .catch(e => {
      res.status(500).status({ errm: "Oh No! Something went wrong." });
      console.log(e);
    });
};
const getAll = (req, res, next) => {
  const db = req.app.get("db");
  db.read_products()
    .then(() => res.status(200).send(products))
    .catch(e => {
      res.status(500).status({ errm: "Oh No! Something went wrong." });
      console.log(e);
    });
};
const update = (req, res, next) => {
  const db = req.app.get("db");
  db.update_product([req.params.id, req.query.desc])
    .then(() => res.sendStatus(200))
    .catch(e => {
      res.status(500).status({ errm: "Oh No! Something went wrong." });
      console.log(e);
    });
};
const deletee = (req, res, next) => {
  const db = req.app.get("db");
  db.delete_product(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(e => {
      res.status(500).status({ errm: "Oh No! Something went wrong." });
      console.log(e);
    });
};

module.exports = {
  create,
  getOne,
  getAll,
  update,
  deletee
};
