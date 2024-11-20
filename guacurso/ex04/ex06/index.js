function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('xano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] verifique se as informações estao preenchida e tente novamente')
    } else {
        var fsex = document.getElementsByName('xsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homen'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src','crianca.m.jpg')
            } else if(idade < 20 ){
                //joven
                img.setAttribute('src','joven.m.jpg')
            } else if(idade <= 50){
                //adulto
                img.setAttribute('src','adulto.m.jpg')
            } else {
                //adulto
                img.setAttribute('src','idoso.m.jpg')
            }
        }  else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src','crianca.f.jpg')
            } else if(idade <= 20 ){
                //joven
                img.setAttribute('src','joven.f.jpg')
            } else if(idade <= 50){
                //adulto
                img.setAttribute('src','adulto.f.jpg')
            } else{
                //idoso
                img.setAttribute('src','idoso.f.jpg')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `voce e ${genero} e tem ${idade} anos.`
    res.appendChild(img)
}

