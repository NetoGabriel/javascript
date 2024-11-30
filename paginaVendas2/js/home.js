class Roupas{
    Produto
    Preco
    Img
    Quantidade
    Id

    constructor(Produto,Preco,Img,Quantidade,Id){
        this.Produto = Produto
        this.Preco = Preco
        this.Img = Img
        this.Quantidade = 0
        this.Id = Id
    }
}

const roupas1 = new Roupas(`Camiseta preta`, 100 , [`./imagens/img_camiseta1.jpg`, `./imagens/img_camiseta1_foto_2.jpg`, `./imagens/img_camiseta1_foto_3.jpg`, `/imagens/img_camiseta1_foto_1.jpg`], 1)

const roupas2 = new Roupas(`Moleton Branco` , 90 , [`./imagens/img_camisa_manga_longa.jpg` , `./imagens/img_camisa_manga_longa foto 1.jpg` , `./imagens/img_camisa_manga_longa foto 2.jpg` , `./imagens/img_camisa_manga_longa foto3.jpg`] , 2)

const roupas3 = new Roupas(`Camiseta Basica`, 110 ,[`./imagens/img_camisa2jpg.jpg` , `./imagens/img_camisa2jpg foto 1.jpg` , `./imagens/img_camisa2jpg foto 2.jpg` , `./imagens/img_camisa2jpg foto 3.jpg`] , 3)

const roupas4 = new Roupas(`Moleton preto` , 110 , [`./imagens/img_Moleton.jpg`,`./imagens/img_Moleton foto 1.jpg`,`./imagens/img_Moleton foto 2.jpg` , `./imagens/img_Moleton foto 3.jpg`] , 4)

//==================================

const btn1 = document.getElementById("imgbtn")

btn1.addEventListener("click" , e =>{
    window.location.replace("./comprar.html")

    window.localStorage.setItem("nome",roupas1.Produto)
    window.localStorage.setItem("valor",roupas1.Preco)
    window.localStorage.setItem("id",roupas1.Id)
    
    for (let i = 0; i < 4; i++) {
        window.localStorage.setItem(("img" + (i + 1)), roupas1.Img[i])
    }
})

const btn2 = document.getElementById("btn2")

btn2.addEventListener("click" ,  e =>{
    window.location.replace("./comprar.html")

    window.localStorage.setItem("nome",roupas2.Produto)
    window.localStorage.setItem("valor",roupas2.Preco)
    window.localStorage.setItem("id",roupas2.Id)

    
    for (let i = 0; i < 4; i++) {
        window.localStorage.setItem(("img" + (i + 1)), roupas2.Img[i])
    }
})

const btn3 = document.getElementById("btn3")

btn3.addEventListener("click" ,  e =>{
    window.location.replace("./comprar.html")

    window.localStorage.setItem("nome",roupas3.Produto)
    window.localStorage.setItem("valor",roupas3.Preco)
    window.localStorage.setItem("id",roupas3.Id)

    
    for (let i = 0; i < 4; i++) {
        window.localStorage.setItem(("img" + (i + 1)), roupas3.Img[i])
    }
})

const btn4 = document.getElementById("btn4")

btn4.addEventListener("click" ,  e =>{
    window.location.replace("./comprar.html")

    window.localStorage.setItem("nome",roupas4.Produto)
    window.localStorage.setItem("valor",roupas4.Preco)
    window.localStorage.setItem("id",roupas4.Id)

    
    for (let i = 0; i < 4; i++) {
        window.localStorage.setItem(("img" + (i + 1)), roupas4.Img[i])
    }
})


const nomeProduto = localStorage.getItem("nome");
const precoProduto = localStorage.getItem("valor");
const idProduto = localStorage.getItem("id");

// Para as imagens, você pode fazer algo assim:
const imagens = [];
for (let i = 1; i <= 4; i++) {
    imagens.push(localStorage.getItem("img" + i));
}

console.log(localStorage.getItem("nome"));
console.log(localStorage.getItem("valor"));

