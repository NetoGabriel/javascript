let mediaGeral = 0
let homens = 0
let maiorHomens = 0
let mulheres = 0
let contador = 0

while(contador <= 10){
    nota = parseFloat(prompt("Digite sua nota:"))
    sexo = prompt("Digite seu sexo: M/F")
    outranota = prompt("Deseja colocar outra nota? S/N")
    if(outranota == "N"){
        break;
    }

    if(sexo == "M"){
        if(nota > maiorHomens){
            maiorHomens = nota
        }
        homens++
    }
    if(sexo == "F" && nota >= 7){
        mulheres++
    }
    mediaGeral += nota
    contador++

}

mediaGeral = mediaGeral / 10

console.log("A media geral foi: " + mediaGeral)
console.log("A quantidade de homens que enviaram foi: " + homens)
console.log("A quantidade de mulheres que estao acima de 7: " + mulheres)
console.log("A maior nota dos homens foi: " + maiorHomens)