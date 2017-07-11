Algumas informações importantes

comandos para projeto nodejs
> npm init

instalando express
> npm install express -save
> node (nome da aplicação) //para subir o servidor

instalando ejs para renderizar paginas
> npm install ejs --save

adicionando recurso nodemon 
> npm install -g nodemon

> nodemon app or app.js (run nodemon)

adicionando mod Mysql
> npm install mysql --save

download mysql installer for windows (**instalar apenas server**)

c:\program files\mysql\mysql server 5.7\bin

> mysql -u root -p

password : senha criada quando instalado mysql

alguns comandos básicos mysql
 
	> show databases;
	> create database (nome do banco de dados);
	> use (nome do banco de dados criado);
	> create table nome da tabela(
		id_(nome do id) int not null primary key auto_increment,
		titulo varchar(100),
		(nome do campo) text,
		data_criacao timestamp default current_timestamp);

	> insert into nome do banco(titulo, nome do campo)values('titulo da noticia','conteudo da noticia');
	> select * from nome da tabela;
	
adicioando modulo consign para padronizar routes
> npm install consign --save
  
configurar no arquivo server.js
> var consign = require('consign');
> consign().include('app/routes').into(app);

adicionando modulo body-parser (* middleware)
> npm install body-parser --save
  
  
  
