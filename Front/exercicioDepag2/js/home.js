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

function trocarImagens(produto, btnId) {
    const imgPrincipal = document.querySelector('.imgPrincipal');
    const imgClicadaContainer = document.getElementById(btnId);
    const imgClicada = imgClicadaContainer.querySelector('img');
    const imgPrincipalImg = imgPrincipal.querySelector('img');

    // Trocar a imagem principal com a imagem clicada
    const tempSrc = imgPrincipalImg.src;
    imgPrincipalImg.src = imgClicada.src;
    imgClicada.src = tempSrc;

    // Trocar as informações do produto
    const tempNome = imgPrincipal.querySelector('h4').textContent;
    const tempPreco = imgPrincipal.querySelector('p').textContent;

    imgPrincipal.querySelector('h4').textContent = produto.Produto;
    imgPrincipal.querySelector('p').textContent = `R$${produto.Roupas}`;

    imgClicadaContainer.querySelector('h4').textContent = tempNome;
    imgClicadaContainer.querySelector('p').textContent = tempPreco;

    // Adicionar o botão de adicionar ao carrinho
    const infoDiv = imgPrincipal.querySelector('.info');
    infoDiv.innerHTML = `
        <h4 id="camisetaPreta">${produto.Produto}</h4>
        <p>R$${produto.Roupas}</p>
        <input type="number" name="quantidade" id="iquantidade" value="1" min="1">
        <button id="btnCarrinho">Adicionar ao carrinho</button>
    `;

    document.getElementById('btnCarrinho').addEventListener('click', function() {
        adicionarAoCarrinho(produto);
    });
}

function adicionarAoCarrinho(produto) {
    const quantidade = parseInt(document.getElementById('iquantidade').value);
    const carrinho = JSON.parse(localStorage.getItem('array')) || [];
    const itemExistente = carrinho.find(item => item.id === produto.Id);

    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinho.push({
            id: produto.Id,
            nome: produto.Produto,
            valor: produto.Roupas,
            imagem: produto.Img[0],
            quantidade: quantidade
        });
    }

    localStorage.setItem('array', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho!');
}

const btn1 = document.getElementById('btn1');
if (btn1) {
    btn1.addEventListener('click', (event) => {
        event.preventDefault();
        trocarImagens(roupas1, 'btn1');
    });
}

const btn2 = document.getElementById('btn2');
if (btn2) {
    btn2.addEventListener('click', (event) => {
        event.preventDefault();
        trocarImagens(roupas2, 'btn2');
    });
}

const btn3 = document.getElementById('btn3');
if (btn3) {
    btn3.addEventListener('click', (event) => {
        event.preventDefault();
        trocarImagens(roupas3, 'btn3');
    });
}

const btn4 = document.getElementById('btn4');
if (btn4) {
    btn4.addEventListener('click', (event) => {
        event.preventDefault();
        trocarImagens(roupas4, 'btn4');
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
            itemDiv.classList.add('item');
            itemDiv.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}">
                <span>${item.nome}</span>
                <span>R$${item.valor}</span>
                <div class="quantidade">
                    <button class="decrementar" data-id="${item.id}">-</button>
                    <span>${item.quantidade}</span>
                    <button class="incrementar" data-id="${item.id}">+</button>
                </div>
            `;
            carrinhoItens.appendChild(itemDiv);
            total += item.valor * item.quantidade;
        });

        carrinhoTotal.innerHTML = `Total: R$${total}`;

        document.querySelectorAll('.incrementar').forEach(button => {
            button.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                atualizarQuantidade(id, 1);
            });
        });

        document.querySelectorAll('.decrementar').forEach(button => {
            button.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                atualizarQuantidade(id, -1);
            });
        });
    }

    function atualizarQuantidade(id, delta) {
        const carrinho = JSON.parse(localStorage.getItem('array')) || [];
        const item = carrinho.find(item => item.id === id);
        if (item) {
            item.quantidade += delta;
            if (item.quantidade <= 0) {
                const index = carrinho.indexOf(item);
                carrinho.splice(index, 1);
            }
            localStorage.setItem('array', JSON.stringify(carrinho));
            mostrarCarrinho();
        }
    }
}); 