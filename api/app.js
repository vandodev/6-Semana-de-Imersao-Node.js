const express = require('express');
const mongoose = require('mongoose');

require('./models/home');
const Home = mongoose.model('Home');

mongoose.connect('mongodb://localhost:27017/celke6', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Conexão com o BD MongoDB realizado com sucesso!");
}).catch((err) => {
    console.log("Erro: Conexão com o BD MongoDB não realizado!");
})

const app = express();

app.get('/home', function (req, res){
    res.send('hello world');
});

app.post('/home', async (req, res) => {
    const dados = {
        "topTitulo": "Temos a solução que a sua empresa precisa!",
        "topSubtitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "topTextoBtn": "Orçamento",
        "topLinkBtn": "http://localhost:3000/orcamento",

        "serTitulo": "Serviços",
        "serSubtitulo": "Featured content or information",
        "serUmIcone": "laptop-code",
        "serUmTitulo": "Serviço um",
        "serUmDesc": "Praesent quis sagittis libero, nec suscipit neque. Quisque ut ultrices lectus, sit amet sollicitudin mauris.",
        "serDoisIcone": "mobile-alt",
        "serDoisTitulo": "Serviço dois",
        "serDoisDesc": "Nullam rutrum imperdiet nisi, eget facilisis elit consectetur accumsan lectus, sit amet sollicdin efficitur.",
        "serTresIcone": "network-wired",
        "serTresTitulo": "Serviço tres",
        "serTresDesc": "Quisque elementum suscipit dolor, sed lobortis nibh. Curabitur et dui iaculis, consectetur enim vitae purus.",
    }

    const homeExiste = await Home.findOne({});
    if(homeExiste){
        return res.status(400).json({
            error: true,
            message: "Erro: A página home já possui um registro!"
        });
    }

    await Home.create(dados, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro: Conteúdo da página home não cadastrado com sucesso!"
        });
    });

    return res.json({
        error: false,
        message: "Conteúdo da página home cadastrado com sucesso!"
    });
});

app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080");
});