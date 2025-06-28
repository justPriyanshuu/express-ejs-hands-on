const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

let feedback = [];

app.get("/", (req, res) => {
  res.render("feedback");
});

app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;
  feedback.push({ name, email, message });
  res.redirect("/all");
});

app.get("/all", (req, res) => {
  res.render("allfeedbacks", { feedback });
});

app.listen(3000, () => {
  console.log("Listening on port");
});
