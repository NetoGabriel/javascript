let confirma = "n"
while(confirma != "s"){
    let nome= prompt("Digite seu nome")
    let idade= parseInt(prompt("Digite sua idade"))
    let salarioatual= parseFloat(prompt("Digite seu salario atual"))
    console.log("nome: " + nome + ", idade: " + idade + ", Salario atual: " + salarioatual)
    confirma=prompt("As informaçoes estao corretas? (s/n)")
}

let aumento= 0.015
console.log("Previsao salarial para os proximos 10 anos")

for(let ano = 1; ano <= 10; ano++ )
    {
    salarioatual += salarioatual * aumento
    aumento *= 2

    console.log((2023 + ano) + " = R$ " + salarioatual)
}