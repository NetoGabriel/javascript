let nomes = []
let senhas = []
let contador = 0 

let continuar = true

while(continuar){
    let opção = prompt("O que deseja fazer? 1- Cadastro / 2- Login / 3- Excluir / 4- Encerrar")

    switch(opção){
        case "1":
            // criando cadastro de usuario
            nomes[contador] = prompt("Digite seu nome")
            senhas[contador] = prompt("Digite sua senha")
            contador++

            break

        case"2":
        // criando login
        
            let nome =prompt("Digite seu nome")
            let senha =prompt("Digite sua senha")
            let loginValido = false

            for( let i = 0; i < nomes.length; i++){
            if(nome == nomes[i] && senha == senhas[i]){
                loginValido = true
            }
            }
            if(loginValido){
            alert("login feito com sucesso. Bem-vindo!")
            }   else{
                alert("Login ou senha incorretos!")
            }

            break;

        case "3":
            // criando excluir
            let nomeExcluir =prompt("Qual nome deseja excluir?")
            let nomesAux = []
            let senhasAux = []
            let  contadorAux = 0

            for(let i = 0; i < contador; i++){
                if(nomeExcluir == nomes[i]){
                    alert("Cadastro excluido com sucesso")
                }else{
                    nomesAux[contadorAux] = nomes[i]
                    senhasAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }
            nomes = nomesAux
            senhas = senhasAux
            contadorAux--
            
            break;

            case"4":
                continuar = false
                break;
            default:
                console.log("opção invalida, escolha outra!")
                break;

            // funçao para encontrar o indice de um nome do array de nomes
            
            function encontrarIndice(nome) {
                for (let i = 0; i < nomes.length; i++) {
                    if(nomes[i] === nome){
                        return i;
                    }
                }
                return -1;
            }

            }
       

}