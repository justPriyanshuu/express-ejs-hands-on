const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/submit", (req, res) => {
  const { name, age } = req.body;
  res.render("result", { name, age });
});

app.listen(3000, () => {
  console.log("Server running on 3000");
});
