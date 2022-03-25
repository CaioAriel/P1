module.exports=function(app){
//rota para a aba index
    app.get('/', function(req,res){
        res.render('home/index.ejs');
    });
}