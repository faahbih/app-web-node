module.exports.noticias = function(application, req, res){
	var connection = application.config.dbConnection(); //recuperar conexao
	var noticiasModel = new application.app.models.NoticiasDAO(connection); //recuperar model, new garante que será aberto uma instancia desse modulo nao havendo preocupação de que os objs estao sendo sobreescritos

	noticiasModel.getNoticias(function(error, result ){
		res.render('noticias/noticias', {noticias : result});
		//res.send(result); // no browser localhost:3000/noticias aparecerá em formato json
	});

}

module.exports.noticia = function(application, req, res){

	var connection = application.config.dbConnection();
		var noticiasModel = new application.app.models.NoticiasDAO(connection);

		noticiasModel.getNoticia(function(error, result){
			res.render('noticias/noticia', {noticia : result});
	 	});

}