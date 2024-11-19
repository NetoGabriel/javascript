var data = new Date()
var diaSe = data.getDay()
var Agr = new Date()
var Hora = Agr.getHours()

switch(diaSe) {
    case 0: console.log(`Domingo`)
    console.log(`Agora sao ${Hora} horas`)
    break
    case 1: console.log(`Segunda`)
    console.log(`Agora sao ${Hora} horas`)
    break
    case 2: console.log(`Terça`)
    console.log(`Agora sao ${Hora} horas`)
    break
    case 3: console.log(`Quarta`)
    console.log(`Agora sao ${Hora} horas`)
    break
    case 4: console.log(`Quinta`)
    console.log(`Agora sao ${Hora} horas`)
    break
    case 5: console.log(`Sexta`)
    console.log(`Agora sao ${Hora} horas`)
    break
    case 6: console.log(`Sabado`)
    console.log(`Agora sao ${Hora} horas`)
    break
    default:
}
if(Hora < 12){
    console.log(`Bom dia`)
} else if(Hora <= 18){
    console.log(`Boa tarde`)
} else(Hora <= 18)
{console.log(`Boa noite`)}