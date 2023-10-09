const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("bem vindo ao meu site!")
})

app.get("/produtos", function(req,res){
    res.send("minha lista de produtos");
})

//rota como parametro opcioinal

app.get("/cadastro/:nome", function(req,res){
    var nome = req.params.nome;
    if(nome){
        res.send("produtos "+nome+" criado");
    }else{
        res.send("produto criado")
    }
    res.send("retorno consulta "+req.params.parametro);
})


app.listen(4000,function(erro){
    if(erro){
        console.log("erro ao iniciar")
    }else{
        console.log("servidor iniciado")
    }
})