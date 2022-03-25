const app=require('./config/server.js');
const rotaHome=require('./app/routes/home')(app);
const rotaAdmin=require('./app/routes/admin')(app);
const rotaNoticias=require('./app/routes/noticias')(app);

app.get('/', function(req, res){
    res.render('home/index.ejs');
});

app.get('/noticias', function(req, res){
    
    var mysql=require('mysql');
    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'ifms',
        database:'portal_noticias'
    });
    connection.query('select * from noticias', function(error, result){
        if (error){
            console.log(error)
        };
        //res.send(result);
        res.render('noticias/noticias.ejs',{noticias: result});
    });


});        
app.get('/formulario_inclusao_noticia', function(req,res){
    res.render('admin/form_add_noticia.ejs');
});



app.listen('3000',function(){
    console.log('Servidor rodando na porta 3000')
})
