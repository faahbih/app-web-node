var express = require('express'); //biblioteca do express
var consign = require('consign'); //autoload para carregar todas as rotas
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs'); // setando para ejs para renderização/rotas
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended:true})); //implementação do body-parser como middleware para recuperar requisiçoes transitadas via post
app.use(expressValidator());

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;