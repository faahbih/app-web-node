var http = require('http'); //biblioteca http

//criando servidor
var server = http.createServer(function(req, res){

		var categoria = req.url;

		if(categoria == '/tecnologia'){
			res.end("<html><body>Noticias de Tecnologia</body></html>")
		
		}else if(categoria == '/moda'){
			res.end("<html><body>Noticias de Moda</body></html>");
		
		}else if(categoria == '/beleza'){
			res.end("<html><body>Noticias de beleza</body></html>");

		}else{
			res.end("<html><body>Portal de Noticias</body></html>"); //respondendo em html com  o método end
		}

});
//ouvindo na porta escolhida
server.listen(3000);