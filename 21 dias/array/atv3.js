let valor = parseInt(prompt("Digite a tabuada que deseja:"))



for( let i = valor; i <= valor + 2; i ++){
    console.log("Esta o valor da tabuada " + i)
    for(let t = i; t <= 10; t ++){
        console.log(t + " x " + i + " = " + (t*i) )
    }

}