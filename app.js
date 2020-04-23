// dependencies
const express = require("express");
const app = express();

//
app.set("view engine", "ejs");
app.use(express.static("public"));
//routes

app.get('/', (req,res) => {
    res.render("landing");
});


// deployment

app.listen('3000' , () => {
    console.log("listening at localhost, port 3000");
});

