
// Criando classes

class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone

    constructor(Id,Nome,Categoria,Endereco,Telefone){
        this.Id = Id
        this.Nome = Nome
        this.Categoria = Categoria
        this.Endereco = Endereco
        this.Telefone = Telefone
    }
}

class Reservas {

    Id
    IdHotel
    Responsavel
    DiaDeEntrada
    DiaDeSaida

    constructor(Id,IdHotel,Responsavel,DiaDeEntrada,DiaDeSaida) {
        
        this.Id = Id
        this.IdHotel = IdHotel
        this.Responsavel = Responsavel
        this.DiaDeEntrada = DiaDeEntrada
        this.DiaDeSaida = DiaDeSaida
    }
}

// Criando Arrays

let hoteis = []
let reservas = []
let IdHotel = 1
let idReserva = 1

// Funcao de cadastro do hotel
function CadastrarHotel() {
    let nome = prompt("Digite o nome do hotel:")
    let categoria = prompt("Digite a categoria do hotel:")
    let endereco = prompt("Digite o endereco do hotel:")
    let telefone = prompt("Digite o telefone do hotel:")
    let hotel = new Hotel(IdHotel,nome,categoria,endereco,telefone)
    hotel++
    hoteis.push(hotel)
}

// Funcao de cadastro de reserva

function CadastroDeReserva() {
    let IdHotel 
    let Existe  = true

    do {
        IdHotel = prompt("Digite o id do hotel:")
        for(let i = 0; i < hoteis.length; i++){
            if(hoteis[i].Id == IdHotel){
                i = hoteis.length
                Existe = true
            }else if(i == hoteis.length - 1){
                console.log("ID do hotel nao encontrado")
            }
        }
        
    } while (!Existe)

    let nome = prompt("Digite o nome do responsavel:")
    let DiaDeEntrada = parseInt(prompt("Digite o dia da entrada:"))
    let DiaDeSaida 
    
    do {
        DiaDeSaida= parseInt(prompt("Digite o dia da saída:"))
        if (DiaDeSaida < DiaDeEntrada) {
            console.log("Data de saida deve ser maior que o dia de entrada:")
        }
        
    } while (DiaDeSaida < DiaDeEntrada);

    let reserva = new Reservas(idReserva, IdHotel, nome, DiaDeEntrada, DiaDeSaida)
    idReserva++
    reservas.push(reserva)
}

// Funcao para procurar reservas

function ProcurandoReservasPeloHotel(IdHotel) {
    reservas.forEach(reserva => {
        if(IdHotel == reserva.IdHotel){
            let i = IdHotel - 1
            console.log("Hotel:", hoteis[i].nome)
            console.log("Responsavel:", reserva.Responsavel)
            console.log("Dia de entrada:", reserva.DiaDeEntrada)
            console.log("Dia de saida:", reserva.DiaDeSaida)
        }
    })
}

// funcao para procurar hotel pelas reservas

function ProcurandoHotelPelaReserva(idReserva) {
    let IdHotel = reservas[idReserva - 1].IdHotel
    console.log("Hotel:", hoteis[IdHotel - 1].Nome)
    console.log("Endereco:", hoteis[IdHotel - 1].Endereco)
    console.log("Dia de entrada:", reservas[idReserva - 1].DiaDeEntrada)
    console.log("Dia de saida:", reservas[idReserva - 1].DiaDeSaida)
}

// funcao para procurar responsavel pela reserva

function ProcurandoReservasPeloNome(nome) {
    for (let i = 0; i < reservas.length; i++) {
        if(nome == reservas[i].Responsavel){
            console.log("Id reserva:" + reservas[i].Id)
            console.log("Hotel:", hoteis[reservas[i].IdHotel - 1].Nome)
        }
    }
}

// Funcao para procurar hoteis pela categorias

function ProcurarHotelPelacategoria(categoria) {
    let hoteisProcurados = []
    for(let i = 0; i < hoteis.length; i++){
        if(categoria == hoteis[i].Categoria){
            hoteisProcurados.push(hoteis[i].Nome)
        }
    }
    return hoteisProcurados
}

//Funcao para atualizar telefone

function AtualizarTelefone(IdHotel,Telefone) {
    hoteis[IdHotel - 1].Telefone = Telefone
    console.log("Telefone atualizado")
}

// Fluxo de fucionamento

let continuar = true

do {
    let opcao = prompt("Escolha uma das opções:\n1 - Cadastrar hotel\n2 - Cadastrar reserva\n3 - Procurar reservas pelo hotel\n4 - Procurar hotel pela reserva\n5 - Procurar reservas pelo nome\n6 - Procurar hoteis pela categoria\n7 - Atualizar telefone\n8 - Sair")

    switch (opcao) {
        case "1":
            CadastrarHotel()
            break;
        case "2":
            cadastroDeReserva()
            break;
        
        case "3":
            ProcurandoReservasPeloHotel(prompt("Digite o id do hotel:"))
        break;
        case "4":
            ProcurandoHotelPelaReserva(prompt("Digite o id da reserva:"))

            break;
        case "5":
            ProcurandoReservasPeloNome(prompt("Digite o nome do responsavel:"))
            break;
        case "6":
            let hoteisprocurados = ProcurarHotelPelacategoria(parseInt(prompt("Digite a categoria:")))
            console.log(hoteisprocurados)
            break;
        case "7":
            let idhotel = parseInt(prompt("Digite o id do hotel:"))
            let telefone = prompt("Digite o novo telefone:")
            AtualizarTelefone(idhotel,telefone)
            break;
        case "8":
            console.log("Saindo...")
            continuar = false
            break;
            
        default:
            console.log("Opção inválida")
            break;
    }
} while (continuar);