let ArrayA = [13,20,10,22,24,20,27,17,19,14];
let ArrayB = [24,22,23,11,15,17,29,14,16,21];


function Achararray(ArrayUM,ArrayDois){
    let resultado = []
    let contador = 0;


    for (let i = 0; i < ArrayUM.length; i++) {

        for (let j = 0; j < ArrayDois.length; j++) {


            if (ArrayUM[i] == ArrayDois[j]) {
                resultado[contador] = ArrayUM[i]
                contador++
                j = ArrayDois.length 
            }
        }
        
    }
    return resultado
};
 console.log(Achararray(ArrayA,ArrayB ))