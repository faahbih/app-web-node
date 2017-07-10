module.exports = function(application){

	application.get('/noticias', function(req, res){

		var connection = app.config.dbConnection();
		var noticiasModel = application.app.models.noticiasModel;

		noticiasModel.getNoticias(connection, function(error, result ){
	 		res.render("noticias/noticias", {noticias : result});
	 	});
			//res.send(result); // no browser localhost:3000/noticias aparecerá em formato json
	 });
};
