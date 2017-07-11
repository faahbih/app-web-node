module.exports = function(application){
	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia");
	});
	
	application.post('/noticias/salvar', function(req, res){
		var noticia = req.body;
		req.assert('titulo','título obrigatório').notEmpty(); //configurando campos para preenchimento obrigatorio
		req.assert('resumo','resumo obrigatório').notEmpty();
		req.assert('resumo','resumo deve conter entre 10 a 100 caracteres').len(10, 100);
		req.assert('autor','autor obrigatório').notEmpty();
		req.assert('data_noticia','data é obrigatória').notEmpty().isDate({format:'YYY-MM-DD'});
		req.assert('noticia','noticia é obrigatória').notEmpty();

		var erros = req.validationErrors();
		console.log(erros);

		if(erros){
			res.render("admin/form_add_noticia", {validacao:erros});
			return;
		}

		var connection = application.config.dbConnection(); //recuperar conexao
		var noticiasModel = new application.app.models.NoticiasDAO(connection); //recuperar model

		//envia para função de salvarNoticias
		noticiasModel.salvarNoticia(noticia, function(error, result ){
			res.redirect('/noticias'); //corrigi o problema do f5
	 		//res.render("noticias/noticias", {noticias : result}); // dessa forma ocorre registro no banco de dados porém não aparece na pagina de noticias. outro problema é se dermos um f5 ele gerará um novo registro no banco de dados
	 	});

	});
}