let nome = ''
let idade = 0
let altura = 0
let peso = 0

nome = prompt("Digite seu nome")
idade = parseInt(prompt("Digite sua idade"))
altura = parseFloat(prompt("Digite sua altura"))
peso = parseFloat(prompt("Digite seu peso"))

let anonascimento = 0 
anonascimento = 2023 - idade

let imc = 0
imc = peso / (altura * altura)


console.log("ola, " + nome + " voce tem " + idade + " anos, nasceu em " + anonascimento + ", tem " + altura + " de altura, pesa " + peso +" kg " + " seu imc e," + imc + " kg/m2");
