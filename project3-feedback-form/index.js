const express = require("express");
const app = express();
const path = require("path");

app.set('views engine','views');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));