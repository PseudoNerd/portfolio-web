// dependencies
var app = require("express")();


//
app.set("view engine", "ejs");

//routes

app.get('/', (req,res) => {
    res.render("landing");
});


// deployment

app.listen('3000' , () => {
    console.log("listening at localhost, port 3000");
});

