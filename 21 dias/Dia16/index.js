let nomes = [];
let senhas = [];

function solicitarOpcao(){
    let escolha = prompt("Escolha uma das opções: \n1.Cadastrar \n2.Login \n3.Excluir\n4.Encerrar programa");
    return escolha;
}

function CadastrarUsuario(){
    nomes.push(prompt("Digite seu nome"));
    senhas.push(prompt("Digite sua senha"));
}

function fzrLogin(nome, senha){
    let verificar = nomes.indexOf(nome);
    if(verificar !== -1 && senhas[verificar] === senha){
        return true;
    }else{
        return false;
    }
}

function ExcluirCadastro(nome){
    let verificar = nomes.indexOf(nome);
    if (verificar !== -1){
        nomes.splice(verificar, 1);
        senhas.splice(verificar, 1);
        console.log("Cadastro excluido com sucesso.");
    }else{
        console.log("Usuario não encontrado.");
    }
}

let continuar = true;

while (continuar) {
    let opcao = solicitarOpcao();
    
    switch (opcao) {
        case "1":
            CadastrarUsuario();
            break;
        case "2":
            let nome = prompt("Digite seu nome");
            let senha = prompt("Digite sua senha");
            let login = fzrLogin(nome, senha);
            if(login){
                console.log("Login feito");
            }else{
                console.log("ERRO");
            }
            break;
        case "3":
            let nom = prompt("Digite seu nome");
            ExcluirCadastro(nom);
            break;
        case "4":
            continuar = false;
            break;
        default:
            console.log("Tente novamente");
            break;
    }
}