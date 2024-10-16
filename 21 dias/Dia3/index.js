let num1 = parseInt(prompt("Escolha o primeiro numero"))
let num2 = parseInt(prompt("Escolha o segundo numero"))
let opçao = parseInt(prompt("Escolha a opçao desejada" + "\n1 = +; \n2 = -; \n3 = *; \n4 = /;"))

switch(opçao){
    case 1:
        console.log(num1 + "+" + num2 + "=" +(num1 + num2))
        break;
    case 2:
        console.log(num1 + "-" + num2 + "=" + (num1 - num2))
        break;
    case 3:
        console.log(num1 + "*" + num2 + "=" +(num1 * num2))
        break;
    default:
        console.log(num1 + "/" + num2 + "=" + (num1 / num2))
        break;
}