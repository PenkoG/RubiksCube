const express = require('express');

const initHadlebars = require('./config/handlebars.js');

const app = express();

initHadlebars(app);

app.all('/', (req, res) => {
    res.render('index');
})

app.listen(5000, () => {
    console.log("Application is running on http://localhost:5000");
})