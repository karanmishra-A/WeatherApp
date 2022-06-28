const path = require('path');
const express = require('express');
const app = express();


app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) =>{
    res.render('index');
});
app.get("/about", (req, res) =>{
    res.render('about');
});
app.get("/weather", (req, res) =>{
    res.render('weather');
});
app.get("*", (req, res) =>{
    res.render("404error", {
        errorMsg: 'Oops! Page Not Found'
    });
});

app.listen(8000);