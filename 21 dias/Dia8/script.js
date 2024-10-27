let alunos = []
let notas = []
let continuar = true
let contador = 0



while(continuar){
let nome = prompt("Digite o nome do " + (contador + 1) + "º aluno")
let nota = parseInt(prompt("Digite a nota do aluno"))
alunos[contador] = nome
notas[contador] = nota
contador++

let resposta = prompt("Diseja adicionar informaçoes sobre outro aluno?(s/n)")
if(resposta == "n")
    continuar = false
}

console.log("Notas dos alunos: ")
for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i] + " - " + notas[i])
}

let somanotas = 0
 for(let i = 0; i < alunos.length; i++){
    somanotas += notas[i]
 }

 let media = somanotas / alunos.length
 console.log("A soma das notas foi:" + somanotas)
 console.log("A media Geral foi:" + media)