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

app.get("/:id", (req, res) => {
  res.send(viewRecipe);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
