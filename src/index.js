const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

//// Converts the urlencoded form data to JSON
app.use(express.urlencoded({ extended: true }));

//// Configure express-handlebars
require('./config/handlebars')(app);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);

app.listen(5000, () => {
    console.log("Application is running on http://localhost:5000");
})