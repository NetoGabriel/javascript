class Computador{
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    Ssd
    
    constructor(Tipo,Processador,Video,Armazenamento,MemoriaRam,Ssd){
        this.Tipo = Tipo;
        this.Processador = Processador;
        this.Video = Video;
        this.Armazenamento = Armazenamento;
        this.MemoriaRam = MemoriaRam;
        this.Ssd = Ssd;
    }

    ExibirINformacoes(){

            console.log(`Informaçoes do computador:`);
        
        console.log(`O tipo: ${this.Tipo}`
             + ` O processador: ${this.Processador}` 
             + ` A placa de video: ${this.Video}` 
             + ` O armazenamento: ${this.Armazenamento}` 
             + ` A memoria ram: ${this.MemoriaRam}` 
             + ` Ssd: ${this.Ssd}`);
        
        
    }
}




console.log("========== Cadastro ==========");
let computer = [];
let continuar = true;
let indexDeComputador = 0;

while(continuar){

    let Tipo = prompt("Qual o tipo do seu computador ?");
    let Processador = prompt("Qual o seu processador ?");
    let Video = prompt("Qual sua placa de video ?");
    let Armazenamento = prompt("Qual o seu armazenamento ?");
    let MemoriaRam = prompt("Qual a sua memoriaRam ?");
    let Ssd = prompt("Tem Ssd ? S/N");
    let meuComputador = new Computador(Tipo,Processador,Video,Armazenamento,MemoriaRam,Ssd)
    meuComputador.ExibirINformacoes();

    computer[indexDeComputador] = meuComputador;
    let desejaContinuar = prompt("Digite 1 caso deseje cadastrar um novo computador");
    if(desejaContinuar != "1"){
        continuar = false;
    }else{
        indexDeComputador++;
    }
}