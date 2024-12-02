window.addEventListener('load', e =>{
    let total = 0
    let vazio = true
    let carrinhoDiv = document.getElementById('carrinho')
    let array = JSON.parse(window.localStorage.getItem('array'))

    for (let i = 0; i < array.length; i++) {
        console.log('entrando no for')
        let nome = array[i].nome
        let valor = array[i].valor
        let qnt = array[i].quantidade   
        console.log(nome,valor,qnt)


        let produto = array[i]

        if(produto.quantidade > 0){
            console.log('entrando no if')

            vazio = false
            let img = document.createElement('img')


            img.style.width = '250px'
            img.style.height = '150px'
            img.style.margin = '40px'
        }

        switch(produto.nome){
            case 'Camisa preta':
                img.src = '..//imagens/img_camiseta1_em-200x150.jpg'
                break;

            case 'Moleton branco':
                img.src = '..//imagens/img_camisa_manga_longa - 3-200x200.jpg'
                break;

            case 'Camisa basica':
                    img.src = '..//imagens/img_camisa2 - 2-200x150.jpg'
                    break;

            case 'Moleton preto':
                    img.src = '..//imagens/img_Moleton-200x150.jpg'
                    default:
                    break;
        }

        let text = document.createElement('p');

        text.style.borderBottom = '1px solid'
        text.style.display = 'flex';
        text.style.justifyContent = 'space-between'
        text.style.alignItems = 'center'
        text.style.width = '100%'
        text.style.fontSize = '1.5em'



        let nome = document.createElement('span');
        nome.innerText = produto.nome;
        nome.style.width = '400px'
        nome.style.marginRight = '2vw'






































    }


})