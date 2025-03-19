const express = require('express');
const app = express();
const bd = require('./dados');
const bdcontext = bd.AlunosDatabase();

app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor iniciou na porta 3000');
});

const test = [];

app.get('/teste', async (req, res) => {
    res.status(200).json(await bdcontext.list());
    console.log('Api get todos teste');
});

app.get('/teste/:id', async (req, res) => {
    res.status(200).json(await bdcontext.get(req.params.id));
    console.log("Api get teste por id");
});

app.post('/teste', async (req, res) => {
    console.log('Api Post teste');
    res.status(200).send("Adicionado com sucesso " + await bdcontext.insert(req.body)); // 
});

app.put('/teste/:id', async (req, res) => {
    console.log('Api Put teste');
    res.status(200).send("Atualizado com sucesso " + await bdcontext.update(req.body, req.params.id)); 
});

app.delete('/teste/:id', async (req, res) => {
    console.log('Api Delete teste');
    res.status(200).send("Deletado com sucesso " + await bdcontext.del(req.params.id)); 
});