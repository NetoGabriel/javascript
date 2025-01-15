let num1 = parseInt(prompt("Escolha um numero"))
let num2 = parseInt(prompt("Escolha outro numero"))
let escolha = parseInt(prompt("Escolha a operação desejada" + 
    "\n1 = + " + "\n2 = - " + "\n3 = * " + "\n4 = / "))


    switch(escolha){
        case 1:
            console.log(num1 + " + " + num2 + " = " + (num1 + num2))
            break;
        case 2:
            console.log(num1 + " - " + num2 + " = " + (num1 - num2))
            break;
        case 3:
            console.log(num1 + " * " + num2 + " = " + (num1 * num2))
            break;
        default:
            console.log(num1 + " / " + num2 + " = " + (num1 / num2))
            break;
    }