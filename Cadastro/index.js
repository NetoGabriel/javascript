document.getElementById('form').addEventListener('submit' , (event) =>{
    const form = event.currentTarget
    const data = {
        nome: form.nome.value,
        endereço: form.endereço.value,
        DiaDaSemana: form.DiaDaSemana.value,
        abertura: form.abertura.value,
        fechamento: form.fechamento.value,
        
    }

    //=====================================================

    console.log("Preparando o envio")
    form.campo.disabled = true
    window.localStorage.setItem('dados' , JSON.stringify(data))
})

window.onload = () => {
    const form = document.getElementById('form')
    let data = window.localStorage.getItem('dados')
    if( data){
        data = JSON.parse(data)
        form.nome.value = data.nome
        form.endereço.value = data.endereço
        form.DiaDaSemana.value = data.DiaDaSemana
        form.abertura.value = data.abertura
        form.fechamento.value = data.fechamento
    }
}