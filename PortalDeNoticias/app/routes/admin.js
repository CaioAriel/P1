const app = require("../../config/server")

module.exports=function(app){
    
    app.get('/formularioinclusaonoticia',(req,res)=>{
        res.render('admin/forma_aa_noticas.ejs');
    });
}