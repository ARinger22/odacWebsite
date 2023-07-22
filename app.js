const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.sendFile(__dirname+"/index.html");
})

app.get("/register",function(req, res) {
    res.render(__dirname+"/register.html")
})





app.listen(3000, function(){
    console.log("Server listening on port 3000")
});