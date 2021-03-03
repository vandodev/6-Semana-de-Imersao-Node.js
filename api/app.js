const express = require('express');

const app = express();

app.get('/home', function (req, res){
    res.send('hello world');
});

app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080");
});