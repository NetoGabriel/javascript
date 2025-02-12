window.addEventListener('load', e => {
    let total = 0;
    let vazio = true;
    let carrinhoDiv = document.getElementById('carrinho');
    let array = JSON.parse(window.localStorage.getItem('array')) || [];

    for (let i = 0; i < array.length; i++) {
        console.log('entrando no for');
        let nome = array[i].nome;
        let valor = array[i].valor;
        let qnt = array[i].quantidade;
        console.log(nome, valor, qnt);

        let produto = array[i];

        if (produto.quantidade > 0) {
            console.log('entrou no if');

            vazio = false;
            let img = document.createElement('img');

            img.style.width = '250px';
            img.style.height = '150px';
            img.style.margin = '40px';

            switch (produto.nome) {
                case 'Camiseta Preta':
                    img.src = 'img/camisetaPreta.jpg';
                    break;
                case 'Moleton Branco':
                    img.src = 'img/moletonBranco.jpg';
                    break;
                case 'Calça Jeans':
                    img.src = 'img/calçaJeans.jpg';
                    break;
                case 'Moleton Preto':
                    img.src = 'img/moletomPreto.jpg';
                    break;
                default:
                    break;
            }

            let texto = document.createElement('p');
            texto.style.borderBottom = '1px solid black';
            texto.style.display = 'flex';
            texto.style.justifyContent = 'space-between';
            texto.style.alignItems = 'center';
            texto.style.width = '100%';
            texto.style.fontSize = '1.5em';

            let nomeSpan = document.createElement('span');
            nomeSpan.innerHTML = produto.nome;
            nomeSpan.style.width = '400px';
            nomeSpan.style.marginRight = '2vw';

            let qtd = document.createElement('span');
            qtd.innerHTML = `${produto.quantidade}x`;
            qtd.style.marginRight = '12vw';

            let preco = document.createElement('span');
            preco.style.margin = '40px';
            preco.style.marginRight = '6vw';
            preco.innerHTML = `R$${valor}`;

            texto.appendChild(img);
            texto.appendChild(nomeSpan);
            texto.appendChild(qtd);
            texto.appendChild(preco);

            carrinhoDiv.appendChild(texto);

            total += Number(valor);

            let totalDiv = document.getElementById('total');
            totalDiv.innerHTML = `Total a pagar: R$${total}`;
            totalDiv.style.marginTop = '5vh';
            totalDiv.style.marginBottom = '5vh';
            totalDiv.style.fontSize = '1.5em';

            window.localStorage.setItem('Total', total);
        }
    }

    if (vazio) {
        carrinhoDiv.innerHTML = 'Carrinho vazio';
        carrinhoDiv.style.fontSize = '1.5em';
    }

    if (!vazio) {
        let apagarCarrinho = document.getElementById('apagar');
        let apagar = document.createElement('button');

        let mexer = document.getElementById('divApagar');
        mexer.style.display = 'flex';
        mexer.style.justifyContent = 'center';
        mexer.style.marginBottom = '30px';

        apagar.innerHTML = 'Limpar Carrinho';
        apagarCarrinho.appendChild(apagar);
        apagar.style.padding = '10px';
        apagar.style.backgroundColor = 'white';
        apagar.style.color = 'red';
        apagar.style.border = '1px solid red';

        apagar.addEventListener('mouseover', function() {
            apagar.style.transitionDuration = '0.5s';
            apagar.style.borderRadius = '10px';
            apagar.style.cursor = 'pointer';
        });

        apagar.addEventListener('mouseout', function() {
            apagar.style.transitionDuration = '0.5s';
            apagar.style.borderRadius = '0px';
            apagar.style.cursor = 'default';
        });

        apagar.addEventListener('click', e => {
            document.getElementById('carrinho').innerHTML = 'Carrinho vazio';
            let totalDiv = document.getElementById('total');
            totalDiv.innerHTML = '';
            window.localStorage.setItem('array', JSON.stringify([]));
        });
    }
});