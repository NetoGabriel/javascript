let nome=(prompt("Digite seu nome"))
let idade=(prompt("digite sua idade"))
let peso=(prompt("Digite seu peso"))
let altura=(prompt("Digite sua altura"))
let profissão=(prompt("Digite sua profissão"))

console.log(" Ola " + nome + " voce tem " + idade + " anos, e " + profissão + " ,tem " + altura + "M de altura e pesa " + peso + "KG" )

if(idade >= 18){
    console.log("Esta liberado para beber")
} else{console.log("Volte para casa")}

let meses= idade *12
let semanas= idade *52
let dias= idade *365

console.log("Sua idade em meses e" + meses)
console.log("Sua idade em semanas e" + semanas)
console.log("Sua idade em dias e" + dias)