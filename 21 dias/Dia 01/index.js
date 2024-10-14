let Nome= ""
let Idade= 0
let Peso= 0 
let Altura= 0

Nome= prompt("Digite seu nome:")
Idade= parseInt(prompt("Digite sua idade;"))
Peso= parseInt(prompt("Digite seu peso:"))
Altura= parseFloat(prompt("Digite sua altura:"))

let anoNasc= 0
anoNasc=2023 - Idade

let imc= 0
imc= Peso / (Altura * Altura)

console.log("Ola " + Nome + ",voce tem " + Idade + "anos, nasceu em " + anoNasc + " ,tem " + Altura + " de altura, pesa " + Peso + " seu IMC e " + imc + " kg ")