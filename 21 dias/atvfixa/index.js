const temFome = prompt("Voce esta com fome? S/N")
const temDinheiro = prompt("Voce tem dinheiro? S/N" )
const resAberto = prompt("Restaurante esta aberto? S/N")


if(temFome === "nao" || temDinheiro ==="nao"){
    console.log("Vamos jantar em casa")
} else if(temDinheiro === "sim" && resAberto ==="sim"){
    console.log("Vamos jantar fora")
} else{
    console.log("peça um ifood")
}