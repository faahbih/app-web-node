var express = require('express'); //biblioteca do express
var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs'); // setando para ejs para renderização/rotas
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended:true})); //implementação do body-parser como middleware para recuperar requisiçoes transitadas via post

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app);

module.exports = app;