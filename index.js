const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const chefHomeData = require("./chefHomeData.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(chefHomeData);
});

app.get("/chefDetails", (req, res) => {
  res.send(chefHomeData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
