

var express = require('express');
var methodOverride = ('method-override');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;

// serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT);
});