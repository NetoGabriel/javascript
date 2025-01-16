class Carro{
    Nome;
    Potencia;
    VelocidadeMaxima;
    Aceleracao;

    constructor(Nome,Potencia,VelocidadeMaxima,Aceleracao){
        this.Nome = Nome;
        this.Potencia = Potencia;
        this.VelocidadeMaxima = VelocidadeMaxima;
        this.Aceleracao = Aceleracao;

    }

    ExibirINformacoes(Distancia){

        console.log("Informaçoes do carro");
        console.log(`Nome: ${this.Nome}`);
        console.log(`Potencia: ${this.Potencia}`);
        console.log(`Velocidade Maxima: ${this.VelocidadeMaxima}`);
        console.log(`Aceleração: ${this.Aceleracao}`)

        let resultado= Distancia /(this.VelocidadeMaxima/this.Aceleracao);
        return resultado;
    }
    
}
console.log("------------------------")
let car = []; 
let continuar = true;
let inicio = 0;


while(continuar){
    let Nome = prompt("Qual o modelo do carro ?");
    let Potencia = prompt("Qual a potencia do carro ?");
    let VelocidadeMaxima = prompt("Qual a velocidade ?");
    let Aceleracao = prompt("Qaunto leva de 0 a 100km ?");
    
    let res = new Carro(Nome,Potencia,VelocidadeMaxima,Aceleracao);
    res.ExibirINformacoes();

    car[inicio] = res

    let desejaContinuar = prompt("Digite 1 para cadastrar outro veiculo")
    if(desejaContinuar != "1"){
        continuar = false;
    }else{
        inicio++
    }
}







