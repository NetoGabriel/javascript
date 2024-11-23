function verificar(){
     let numero = document.getElementById("#num1")
     let n = Number(numero.value)

        if(n %2 == 0){
            return "par"
        } else {return "impar"}
}
console.log(verificar())