function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 14
    msg.innerHTML = `Agora são ${hora} horas.` 
    if(hora >= 0 && hora < 12 ){
        img.src = 'manha_pqn.jpg'
        document.body.style.background = '#ffc609'
    } else if(hora >=12 && hora < 18){
        img.src = 'tarde_pqn.jpg'
        document.body.style.background = '#bb5501'
    } else{
        img.src = 'noite_pqn.jpg'
        document.body.style.background = '#571564'
    }
}