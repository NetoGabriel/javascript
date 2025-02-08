class Roupas {
    Produto;
    Roupas;
    Img;
    Quantidade;
    Id;
    constructor(produto, roupas, img, id) {
        this.Produto = produto;
        this.Roupas = roupas;
        this.Img = img;
        this.Quantidade = 0;
        this.Id = id;
    }
}

const roupas1 = new Roupas('Camiseta Preta', 100, ['img/camisetaPreta.jpg'], 1);
const roupas2 = new Roupas('Moleton Branco', 200, ['img/moletonBranco.jpg'], 2);
const roupas3 = new Roupas('Calça Jeans', 150, ['img/calçaJeans.jpg'], 3);
const roupas4 = new Roupas('Moletom Preto', 200, ['img/moletomPreto.jpg'], 4);

const btn1 = document.getElementById('btn1');
if (btn1) {
    btn1.addEventListener('click', () => {
        window.location.replace('produtos.html');
        window.localStorage.setItem('Nome', roupas1.Produto);
        window.localStorage.setItem('Preço', roupas1.Roupas);
        window.localStorage.setItem('id', roupas1.Id);
        for (let i = 0; i < roupas1.Img.length; i++) {
            window.localStorage.setItem('img' + (i + 1), roupas1.Img[i]);
        }
    });
}

const btn2 = document.getElementById('btn2');
if (btn2) {
    btn2.addEventListener('click', () => {
        window.location.replace('produtos.html');
        window.localStorage.setItem('Nome', roupas2.Produto);
        window.localStorage.setItem('Preço', roupas2.Roupas);
        window.localStorage.setItem('id', roupas2.Id);
        for (let i = 0; i < roupas2.Img.length; i++) {
            window.localStorage.setItem('img' + (i + 1), roupas2.Img[i]);
        }
    });
}

const btn3 = document.getElementById('btn3');
if (btn3) {
    btn3.addEventListener('click', () => {
        window.location.replace('produtos.html');
        window.localStorage.setItem('Nome', roupas3.Produto);
        window.localStorage.setItem('Preço', roupas3.Roupas);
        window.localStorage.setItem('id', roupas3.Id);
        for (let i = 0; i < roupas3.Img.length; i++) {
            window.localStorage.setItem('img' + (i + 1), roupas3.Img[i]);
        }
    });
}

const btn4 = document.getElementById('btn4');
if (btn4) {
    btn4.addEventListener('click', () => {
        window.location.replace('produtos.html');
        window.localStorage.setItem('Nome', roupas4.Produto);
        window.localStorage.setItem('Preço', roupas4.Roupas);
        window.localStorage.setItem('id', roupas4.Id);
        for (let i = 0; i < roupas4.Img.length; i++) {
            window.localStorage.setItem('img' + (i + 1), roupas4.Img[i]);
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contato');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nome = document.getElementById('inome').value;
        const email = document.getElementById('iemail').value;
        const telefone = document.getElementById('itelefone').value;

        const data = {
            nome: nome,
            email: email,
            telefone: telefone
        };

        fetch('https://apigenerator.dronahq.com/api/72BE1GmG/SiteDev', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Aqui você pode adicionar código para lidar com a resposta da API
        })
        .catch((error) => {
            console.error('Error:', error);
            // Aqui você pode adicionar código para lidar com erros
        });
    });
});