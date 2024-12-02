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



        nome = document.createElement('span');
        nome.innerText = produto.nome;
        nome.style.width = '400px'
        nome.style.marginRight = '2vw'

        let qtd = document.createElement('span');
        qtd.innerText = `${produto.quantidade}x`;
        qtd.style.marginRight = '12vw'

        let preco = document.createElement('span');
        preco.style.margin = '40px'
        preco.marginRight = '6vw'
        preco.innerText = `${valor}`;

        text.appendChild(img);
        text.appendChild(nome);
        text.appendChild(qtd);
        text.appendChild(preco);


        carrinhoDiv.appendChild(text);

        total += Number(valor)

        let totalDiv = document.getElementById("total")
        totalDiv.innerHTML = `Total a Pagar: ${total}`
        totalDiv.style.marginTop ='5vh'
        totalDiv.style,marginBottom = '5vh'
        totalDiv.style.fontSize = '1.5em'

        window.localStorage.setItem("local", total)

    }
    if(vazio){
        carrinhoDiv.innerHTML = 'Carrinho Vazio'
        carrinhoDiv.style.fontSize = '1.5em'
    }
    if(!vazio){
        let apagarCarrinho = document.getElementById('apagar')
        let apagar = document.createElement('button')

        mexer = document.getElementById("divApagar")
        mexer.style.display = 'flex'
        mexer.style.justifyContent = 'center'
        mexer.style.marginBottom = '30px'

        apagar.innerHTML = 'Limpar Carrinho'
        apagarCarrinho.appendChild(apagar)
        apagar.style.padding = '10px'
        apagar.style.backgroundColor = 'white'
        apagar.style.color = 'red'
        apagar.style.border = 'solid 1px red'


        apagar.addEventListener('mouseover', function(){
            apagar.style.transitionDuration = '0.5s'
            apagar.style.borderRadius = '10px'
            apagar.style.cursor = 'pointer'
        })
        
        apagar.addEventListener('mouseout', function(){
            apagar.style.transitionDuration = '0.5s'
            apagar.style.borderRadius = '0px'
            apagar.style.cursor = 'default'
        })

        apagar.addEventListener('click', e =>{
            document.getElementById('carrinho').remove()
            let totalDiv = document.getElementById('total')
            totalDiv.innerHTML = ''
            window.localStorage.setItem('array',JSON.stringify([]))
        })

    }


})