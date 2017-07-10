var http = require('http'); //biblioteca http

//criando servidor
var server = http.createServer(function(req, res){

		res.end("<html><body>Portal de Noticias</body></html>"); //respondendo em html com  o método end

});
//ouvindo na porta escolhida
server.listen(3000);