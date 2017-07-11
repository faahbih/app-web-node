function NoticiasDAO(connection){
	this._connection = connection;

}

//propriedades que recebem uma função
NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc', callback); 
}

NoticiasDAO.prototype.getNoticia = function(callback){
	this._connection.query('select * from noticias where id_noticia = 10', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
	//console.log(noticia);
	this._connection.query('insert into noticias set ?', noticia, callback); // recebe como parametro um 'sql'e um callback
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}


module.exports = function(){
	return NoticiasDAO;
}
