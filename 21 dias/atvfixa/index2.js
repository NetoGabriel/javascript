let nome 
let idade
let temCarteira
let temCarro

nome = prompt("Digite seu nome")
idade = parseInt(prompt("Digite sua idade"))
temCarteira = prompt("Tem carteira de motorista? S/N")
temCarro = prompt("Voce tem carro? S/N")

if(idade < 18 || temCarteira === "nao"){
    console.log(nome + "voce nao pode dirigir")
} else if(idade >= 18 && temCarteira ==="sim" && temCarro === "nao"){
    console.log(nome + "voce nao tem carro")
} else{
    console.log(nome + "voce pode dirigir")
}