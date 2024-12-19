let inicio = [];
let retorno = [];

for( let i = 0; i < 5; i++){
    let numero = parseInt(prompt("Digite o " + (i + 1) + "° numero"))
    inicio[i] = numero
}

console.log("original " + inicio)

let cont = 4
for(let i = 0; i < 5; i++){
    retorno[i] = inicio[cont]
    cont --
}

console.log("retorno " + retorno)