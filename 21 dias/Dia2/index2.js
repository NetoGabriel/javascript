let nome
let idade
let temcarteira = false
let temcarro = false

nome = prompt("Digite seu nome")
idade = parseInt(prompt("Digite sua idade"))
let optemcarta = prompt("voce tem carteira de motorista s/n?")
if(optemcarta == "s")
   { optemcarta = true}

let optemcarro = prompt("Voce tem carro s/n?")
if(optemcarro == "s")
    {optemcarro = true}

if(idade <18 || optemcarta){
    console.log(nome + "voce nao pode dirigir")
}