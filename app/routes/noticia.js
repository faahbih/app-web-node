module.exports = function(application){

	application.get('/noticia', function(req, res){

		var connection = app.config.dbConnection();
		var noticiasModel = application.app.models.noticiasModel;

		noticiasModel.getNoticia(connection, function(error, result){
			res.render("noticias/noticia", {noticia : result});
	 	});
	});
};

//res.send(result); // no browser localhost:3000/noticias aparecerá em formato json