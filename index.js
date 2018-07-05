const express = require("express");
const bp = require("body-parser");
require(".dotenv").config();
const massive = require("massive");
const cors = require("cors");
const pctrl = require("./products_controller");
massive(process.env.CONNECTION_STRING);

app.use(bp.json());
app.use(cors());
const port = 3000;

massive(process.env.CONNECTION_STRING)
  .then(res => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

app.get("/api/products", pctrl.getAll);
app.get("/api/product/:id", pctrl.getOne);
app.put("/api/product", pctrl.update);
app.post("/api/product", pctrl.create);
app.delete("/api/product/:id", pctrl.deletee);

app.listen(port, () => console.log(`listening on ${port}`));
