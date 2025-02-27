const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor iniciou na porta 3000');
});

const test = [];

app.get('/teste', (req, res) => {
    res.status(200).send({ test: test });
    console.log('Api get todos teste');
});

app.get('/teste/:id', (req, res) => {
    const testeId = test.find(x => x.id === parseInt(req.params.id));
    res.status(200).send(testeId);
    console.log('Api get Id teste');
});

app.post('/teste', (req, res) => {
    test.push(req.body);
    console.log('Api Post teste');
    res.status(200).send("Adicionado com sucesso");
});

app.put('/teste/:id', (req, res) => {
    console.log('Api Put teste');
    console.log('Body:', req.body);
    const teste = test.find(x => x.id === parseInt(req.params.id));
    if (teste) {
        const testeId = test.indexOf(teste);
        test[testeId] = { ...teste, ...req.body };
        console.log('Updated Test:', test[testeId]);
        res.status(200).send("Alterado com sucesso");
    } else {
        res.status(404).send("Item não encontrado");
    }
});

app.delete('/teste/:id', (req, res) => {
    console.log('Api Delete teste');
    const teste = test.find(x => x.id === parseInt(req.params.id));
    if (teste) {
        const testeId = test.indexOf(teste);
        test.splice(testeId, 1);
        console.log('Deleted Test:', teste);
        res.status(200).send("Deletado com sucesso");
    } else {
        res.status(404).send("Item não encontrado");
    }
});