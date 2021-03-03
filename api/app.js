const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/celke6', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Conexão com o BD MongoDB realizado com sucesso!");
}).catch((err) => {
    console.log("Erro: Conexão com o BD MongoDB não realizado!");
})

const app = express();

app.get('/home', function (req, res){
    res.send('hello world');
});

app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080");
});