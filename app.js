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
const PORT = process.env.PORT || 3000;
app.listen(PORT , () => {
});

