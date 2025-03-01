const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Servidor iniciou na porta 3000');
});

const test = [];

app.get('/teste', (req, res) => {
    res.status(200).json({ test: test }); // Correção aqui
    console.log(req.query);
    console.log('Api get todos teste');
});

app.get('/teste/:id', (req, res) => {
    const testeId = req.params.id;
    console.log('Api get Id teste');
    const result = test.find(x => x.id == testeId);
    if (result) {
        res.status(200).json(result); // Correção aqui
    } else {
        res.status(404).send("Item não encontrado");
    }
});

app.get('/teste/:id', (req, res) => {
    const testeId = req.params.id;
    console.log('GET /teste/:id chamado para ID:', testeId);
    console.log('Array test:', test);
    const result = test.find(x => x.id == testeId);
    console.log('Resultado da busca:', result);
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).send("Item não encontrado");
    }
});



app.post('/teste', (req, res) => {
    test.push(req.body);
    console.log('Api Post teste');
    res.status(200).send("Adicionado com sucesso" + req.body);
});

app.put('/teste/:id', (req, res) => {
    console.log('Api Put teste');
    console.log('Body:', req.body);
    const teste = test.find(x => x.id === parseInt(req.params.id));
    if (teste) {
        const testeId = test.indexOf(teste);
        test[testeId] = { ...teste, ...req.body };
        console.log('Updated Test:', test[testeId]);
        res.status(200).json(test[testeId]); // Correção aqui
    } else {
        res.status(404).send("Item não encontrado");
    }
});

app.put('/teste/:id', (req, res) => {
    console.log('PUT /teste/:id chamado para ID:', req.params.id);
    console.log('Dados recebidos:', req.body);
    console.log('Array test antes da atualização:', test);
    const teste = test.find(x => x.id === parseInt(req.params.id));
    if (teste) {
        const testeId = test.indexOf(teste);
        test[testeId] = { ...teste, ...req.body };
        console.log('Array test depois da atualização:', test);
        res.status(200).json(test[testeId]);
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
        res.status(200).json(teste); // Correção aqui
    } else {
        res.status(404).send("Item não encontrado");
    }
});