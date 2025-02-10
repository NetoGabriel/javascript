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

const roupas1 = new Roupas('Camiseta Preta', 100, ['imagens/img_camiseta1 - 2.jpg'], 1);
const roupas2 = new Roupas('Moleton Branco', 200, ['imagens/img_camisa_manga_longa - 3.jpg'], 2);
const roupas3 = new Roupas('Calça Jeans', 150, ['imagens/img_camiseta - 3.jpg'], 3);
const roupas4 = new Roupas('Moletom Preto', 110, ['imagens/img_Moleton - 2.jpg'], 4);

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

        fetch('https://apigenerator.dronahq.com/api/2Aapz5OY/SiteDev', {
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

// pop-up
document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguer = document.getElementById('menuHamburguer');
    const navItens = document.getElementById('navItens');
    const popup = document.getElementById('popupCarrinho');
    const closePopup = document.getElementById('closePopup');
    const carrinhoBtn = document.getElementById('openPopup');
    const carrinhoItens = document.getElementById('carrinhoItens');
    const carrinhoTotal = document.getElementById('carrinhoTotal');
    const limparCarrinhoBtn = document.getElementById('limparCarrinho');

    menuHamburguer.addEventListener('click', function() {
        navItens.classList.toggle('show');
    });

    carrinhoBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Impede a navegação padrão
        popup.style.display = 'block';
        mostrarCarrinho();
    });

    closePopup.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    limparCarrinhoBtn.addEventListener('click', function() {
        localStorage.removeItem('array');
        mostrarCarrinho();
    });

    function mostrarCarrinho() {
        const carrinho = JSON.parse(localStorage.getItem('array')) || [];
        carrinhoItens.innerHTML = '';
        let total = 0;

        carrinho.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.innerHTML = `${item.nome} - Quantidade: ${item.quantidade} - Valor: R$${item.valor}`;
            carrinhoItens.appendChild(itemDiv);
            total += item.valor;
        });

        carrinhoTotal.innerHTML = `Total: R$${total}`;
    }
});