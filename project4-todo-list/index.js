const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

let todos = [];

app.get("/", (req, res) => {
  res.render("to-do", { todos });
});

app.post("/submit", (req, res) => {
  const { task } = req.body;
  todos.push(task);
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  let idx = req.body.index;
  todos.splice(idx, 1);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Running on Port");
});
