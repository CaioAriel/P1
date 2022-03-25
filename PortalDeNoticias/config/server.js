const express=require('express'); //importação do express
const app=express(); //execução do express
app.set('view-engine' , 'ejs'); //configuração da view engine ejs
app.set('views', './app/views'); //configuração do novo diretorio da pasta views

module.exports=app;