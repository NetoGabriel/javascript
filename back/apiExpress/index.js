const express = require('express');
const app = express();

const test = [];

app.use(express.json());

app.get('/teste', (req, res) => {
    console.log(req.query);
    console.log('Api get todos teste');
    res.status(200).send({ test: test });
});

app.get('/teste/:id', (req, res) => {
    const testeId = test.find(x => x.id == req.params.id);
    console.log('Api get Id teste');
    res.status(200).send(testeId);
});

app.post('/teste', (req, res) => {
    console.log('Api Post teste');
    console.log('Body:', req.body);
    test.push(req.body);
    res.status(200).send("Adicionado com sucesso");
});

app.put('/teste/:id', (req, res) => {
    console.log('Api Put teste');
    const teste = test.find(x => x.id == req.params.id);
    if (teste) {
        const testeId = test.indexOf(teste);
        test[testeId] = { ...teste, ...req.body };
        res.status(200).send("Alterado com sucesso");
    } else {
        res.status(404).send("Item não encontrado");
    }
});

app.delete('/teste/:id', (req, res) => {
    console.log('Api Delete teste');
    const teste = test.find(x => x.id == req.params.id);
    if (teste) {
        const testeId = test.indexOf(teste);
        test.splice(testeId, 1);
        res.status(200).send("Deletado com sucesso");
    } else {
        res.status(404).send("Item não encontrado");
    }
});

app.listen(3000, () => {
    console.log('Servidor iniciou na porta 3000');
});