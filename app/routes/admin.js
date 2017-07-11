module.exports = function(application){
	application.get('/formulario_inclusao_noticia', function(req, res){
		application.app.controllers.admin.formulario_inclusao_noticia(application, req, res); //realizar a instancia do mod admin que um controller que contem uma propriedade que armazena uma função q executa
	});
	
	application.post('/noticias/salvar', function(req, res){
		application.app.controllers.admin.noticias_salvar(application, req, res);
	});
}