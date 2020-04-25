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

app.listen(process.env.port , () => {
});

