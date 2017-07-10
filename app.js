var app = require('./config/server');

app.listen(3000, function(){
	console.log("Servidor ON");
	// console.log(msg); ** testando o modulo chamado
});



// var msg = require('./mod_test')(); //chamando o modulo **
// app.get('/formulario_inclusao_noticia', function(req, res){
// 	res.send("<html><body>Portal de Noticias</body></html>"); outra forma de responder a requisição no caso sem o ejs instalado
// });