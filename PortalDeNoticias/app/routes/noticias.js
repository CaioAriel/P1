const dbConnection=require('../../config/dbConnection');


module.exports=function(app){

    var connection=dbConnection();
//rota para a página de notícias
    app.get('/noticias', function(res,req){

        connection.query('select * from noticias', function(error, result){
            if(error){
                console.log(error);
            }
            res.send(result);
        });
        });
    }
