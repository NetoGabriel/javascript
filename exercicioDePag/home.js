const imagem = document.querySelector('.fotprincipal');

imagem.addEventListener('mousemove', (e) => {
    const rect = imagem.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    imagem.style.transform = `rotateY(${x * 40}deg) rotateX(${y * -40}deg)`;
});

imagem.addEventListener('mouseleave', () => {
    imagem.style.transform = 'rotateY(0deg) rotateX(0deg)';
});



 // Seleciona o botão hambúrguer e os itens de navegação
 const burguer = document.getElementById('burguer');
 const navItens = document.querySelector('.navItens');

 // Adiciona evento de clique no hambúrguer
 burguer.addEventListener('click', () => {
     navItens.classList.toggle('open'); // Alterna a classe 'open'
 });