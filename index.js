const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const chefHomeData = require("./chefHomeData.json");
const viewRecipe = require("./viewRecipe.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(chefHomeData);
});

app.get("/chefDetails", (req, res) => {
  // const id = req.params.id;
  // console.log(id);
  // const selectedNews = chefHomeData.find((f) => f.id === id);
  res.send(chefHomeData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
