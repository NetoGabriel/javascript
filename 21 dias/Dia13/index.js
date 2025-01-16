class Salario{
    Nome;
    Salario;
    Aumento;
    NovoSalario;

    constructor(Nome,Salario,Aumento,NovoSalario){
        this.Nome = Nome;
        this.Salario = Salario;
        this.Aumento = Aumento;
        this.NovoSalario = NovoSalario;
    }


    ExibirINformacoes(){

        console.log(`Nome do colaborador: ` + `${this.Nome}`);
        console.log(`Salario: ` + `${this.Salario}` + "$");
        console.log("Aumento: " + `${this.Aumento * 100}` + "%" );
        console.log("Salario reajustado: " + `${this.NovoSalario}`);

        console.log("================");
    }

}


let sala = []; 
let continuar = true;
let inicio = 0;


while(continuar){
    let Nome = prompt("Qual o seu nome ?");
    let salario = parseFloat(prompt("Qual o salario ?"));
    
    let aumento = 0
    if(salario <= 1500){
        aumento = 0.2;
    } else if(salario <= 2000){
        aumento = 0.15;
    } else if(salario <= 3000){
        aumento = 0.10;
    } else if(salario >= 3001){
        aumento = 0.05;
    }
    let novoSalario = salario + (salario * aumento);

    let desejaContinuar = prompt("Deseja calcular novamente S/N ?");
    if(desejaContinuar != "S" ){
        console.log("Calculo encerrado:");
        continuar = false;
    }else{
        inicio++
    }
    
    let res = new Salario(Nome,salario,aumento,novoSalario);
    res.ExibirINformacoes();

    sala[inicio] = res
}


