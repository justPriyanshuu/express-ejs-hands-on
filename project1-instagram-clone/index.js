const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const instadata = require("./data.json");
const { render } = require("ejs");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/instagram", (req, res) => {
  res.render("instagram-landing");
});

app.get("/instagram/:username", (req, res) => {
  const { username } = req.params;
  const data = instadata[username];
  if (data) {
    res.render("instagram", { data });
  } else {
    res.render("error");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
