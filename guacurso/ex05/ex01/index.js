function verificar(){
    let inicio = document.getElementById("contini")
    let fim = document.getElementById("contfim")
    let passo = document.getElementById("contpas")
    let res = document.getElementById("res")

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "ERRO,verifique os dados!"
        //erro na contagem
    } else {
        res.innerHTML = 'contando <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert("Nao foi posssivel contar, condere Passo 1")
            p = 1
        }
        if(i < f){
            // contagem crescente
            for(let c = i; c <= f ; c += p){
            res.innerHTML += ` ${c} \u{1f449}` 
        }
        } else{
            //contagem crescente
            for(c = i;c >= f; c -= p ){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
}}