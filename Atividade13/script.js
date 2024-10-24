const titulo = document.getElementById('titulo');
const imagem = document.getElementById('imagem');

const imagem1 = 'imagem1.jpg';
const imagem2 = 'imagem2.jpg';
const imagem3 = 'imagem3.jpeg';

imagem.src = imagem1;

imagem.addEventListener('mouseover', () => {
    imagem.src = imagem2;
    titulo.textContent = 'JANELA ABERTA'; 
});

imagem.addEventListener('mouseout', () => {
    imagem.src = imagem1;
    titulo.textContent = 'JANELA FECHADA'; 
});

imagem.addEventListener('click', () => {
    imagem.src = imagem3;
    titulo.textContent = 'JANELA QUEBRADA'; 
});
