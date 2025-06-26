const express = require("express");
const app = express();
const path = require("path");

var figlet = require("figlet");

figlet("Priyanshu", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});