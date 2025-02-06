const roupa = document.querySelector('#roupa');
const valor = document.querySelector('#valor');
const imagem = document.querySelector('#img');
const imgGrande = document.querySelector('img4');

window.addEventListener('load', e => {
    roupas.innerHTML = localStorage.getItem('nome');
    const valorComCifrao = `R$ ${localStorage.getItem('valor')}`;
    valor.innerHTML = valorComCifrao;

    Array.from(imagem).forEach((element, i) => {
        let imag = document.getElementById('img' + (i + 1));
        let url = window.localStorage.getItem('img' + (i + 1));
        imag.src = url;
    })
}
);

let grandona = window.localStorage.getItem('img4');
for (let i = 0; i < 3; i++) {

    let imagem = document.getElementById('img' + (i + 1));

    imagem.addEventListener('click', e => {
        imgGrande.src = imagem.src;
        imagem.src = grandona;
        grandona = imgGrande.src;
    });
}

let botaoCarrinho = getElementById('btnCarrinho');

btnCarrinho.addEventListener('click', e => {
    if (JSON.parse(window.localStorage.getItem('array')) == undefined){
        window.localStorage.setItem('array' , JSON.stringify([]));
    }

    let arrayGet = JSON.parse(window.localStorage.getItem('array'));
     let quantidade = Number(document.getElementById('iquantidade').value);

     let nomeProduto = window.localStorage.getItem('nome')
     let valorProduto = window.localStorage.getItem('valor')

     let produtoExistente = arrayGet.find(item => item.nome == nomeProduto);

     if (produtoExistente) {
        produtoExistente.quantidade += quantidade
        console.log(produtoExistente)

    let valorTotalProduto = valorProduto * produtoExistente.quantidade;
    produtoExistente.valor = valorTotalProduto
        }else{
            let objeto = {
                nome: nomeProduto,
                valor: valorTotalProduto,
                quantidade: quantidade,
            }
        arrayGet.push(objeto);
        }
    window.localStorage.setItem('array', JSON.stringify(arrayGet));
    console.log(arrayGet)

    alert('Produto adicionado ao carrinho.')
});
