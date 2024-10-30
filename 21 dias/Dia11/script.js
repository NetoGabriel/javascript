// arrays para nomes e senhas

let nomes = []
let senhas = []

// função para solicitar ao usuario

function soliciteOpcao(){
    let Opcao = prompt("Escolha uma opção: / n1. Cadastrar / n2. Fazer login / n3. Excluir cadastro / n4. Encerrar programa");
    return Opcao
}

// função para solicitar nome e senha do usuario
 function CadastrarUsuario(){
    nomes.push(prompt("Digite seu nome:")) 
    senhas.push(prompt("Digite sua senha:"))
}

// Função para login

function fazerlogin(nome, senha){
    let indice = nomes.indexOf(nome);
    if(indice !== -1 && senhas[indice] == senha){
        return true;
    }else{
        return false
    }
}

// função para exclluir cadastro

function excluirCadastro(nome){
    let indice = nomes.indexOf(nome);
    if(indice !== -1){
        nomes.splice(indice, 1);
        senhas.splice(indice, 1);
        console.log("Cadastro excluido com sucesso!")
    }else{
        console.log("Usuario nao encontrado!")
    }
}

// fluxo de funcionamento do programa

let continuar = true
while(continuar){
    let opção = soliciteOpcao();

    switch(opção){
        case "1":
            CadastrarUsuario();
            break;
        
        case "2":
            let nome = prompt("Digite seu nome:")
            let senha = prompt("Digite sua senha:")
            let login = fazerlogin(nome,senha);
            if(login){
                "login feito com sucesso"
            }else{
                "nome ou senha incorretos!"
            }
            break;

        case "3":
            nome = prompt("Digite seu nome:")
            excluirCadastro(nome);
            break;

        case "4":
            continuar = false
            break;
        default:
            console.log("Opção invalida,tente novamente.");
            break;
    }
}