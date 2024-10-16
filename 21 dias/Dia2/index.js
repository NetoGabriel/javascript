const temfome = prompt("voce esta com fome? sim/nao")
const temdinheiro = prompt("voce esta com dinheiro? sim/nao")
const restauranteaberto = prompt("O restaurante esta aberto? sim/nao")

if(temfome === "nao" || temdinheiro === "nao") {
    console.log("Hoje jantaremos em casa")
} else if(temdinheiro === "sim" && restauranteaberto === "sim"){
    console.log("Escolha o restaurante")
} else {
    console.log("peça um ifood")
}