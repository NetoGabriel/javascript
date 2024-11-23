let num = [8,2,5,9,7,4,1,6]

num.push(0)
num.push(9)
num.sort()
//console.log(`${num}`)
/*
for(let pos=0;pos < num.length;pos++){
    console.log(`A posiçao e ${pos} e o valor e ${num[pos]}`)
}*/

/*for( let pos in num){
    console.log(`A posiçao e ${pos} e o valor e ${num[pos]}`)
}*/

console.log(`${num}`)
console.log(`O valor e ${num} `)
console.log(`Tem ${num.length} elementos`)
console.log(`O primeiro valor e ${num[0]}`)
let pos = num.indexOf(3)
if(pos == -1 ){
    console.log(`o valor nao foi encontrado`)
} else{
    console.log(`O valor e ${pos}`)
}
