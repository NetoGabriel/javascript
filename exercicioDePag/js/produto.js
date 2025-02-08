const roupa = document.querySelector('#roupa');
const valor = document.querySelector('#valor');
const imgGrande = document.querySelector('#img4');

window.addEventListener('load', e => {
    roupa.innerHTML = localStorage.getItem('Nome');
    const valorComCifrao = `R$ ${localStorage.getItem('Preço')}`;
    valor.innerHTML = valorComCifrao;

    for (let i = 0; i < 3; i++) {
        let imag = document.getElementById('img' + (i + 1));
        let url = window.localStorage.getItem('img' + (i + 1));
        if (imag && url) {
            imag.src = url;
        }
    }
});

let grandona = window.localStorage.getItem('img4');
for (let i = 0; i < 3; i++) {
    let imagem = document.getElementById('img' + (i + 1));
    if (imagem) {
        imagem.addEventListener('click', e => {
            imgGrande.src = imagem.src;
            imagem.src = grandona;
            grandona = imgGrande.src;
        });
    }
}

let botaoCarrinho = document.getElementById('btnCarrinho');
if (botaoCarrinho) {
    botaoCarrinho.addEventListener('click', e => {
        if (JSON.parse(window.localStorage.getItem('array')) == undefined) {
            window.localStorage.setItem('array', JSON.stringify([]));
        }

        let arrayGet = JSON.parse(window.localStorage.getItem('array'));
        let quantidade = Number(document.getElementById('iquantidade').value);

        let nomeProduto = window.localStorage.getItem('Nome');
        let valorProduto = Number(window.localStorage.getItem('Preço'));

        let produtoExistente = arrayGet.find(item => item.nome == nomeProduto);

        if (produtoExistente) {
            produtoExistente.quantidade += quantidade;
            produtoExistente.valor = valorProduto * produtoExistente.quantidade;
        } else {
            let objeto = {
                nome: nomeProduto,
                valor: valorProduto * quantidade,
                quantidade: quantidade,
            };
            arrayGet.push(objeto);
        }

        window.localStorage.setItem('array', JSON.stringify(arrayGet));
        alert('Produto adicionado ao carrinho.');
    });
}