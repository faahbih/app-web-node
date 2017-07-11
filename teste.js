application = {}

application.get = function(path, __sof__){
	console.log("Faz algo com o path: '" + path + "'")
	req = "meu"
	res = "amor"

	mensagem = __sof__(req, res)
	console.log(mensagem)
}

application.get("/", function(req, res){
	return req + " " + res
});



print = console.log


function for_each(lista, __sof__) {
	for (var i = lista.length - 1; i >= 0; i--) {
		
		mult = __sof__(lista[i])
		print(mult)
		
	}
}

minha_lista = ["a", "b", "c"]
for_each(minha_lista, function(valor){
	return valor;
})