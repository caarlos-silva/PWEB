document.getElementById('maiorNumForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);

    const maior = Math.max(num1, num2, num3);
    document.getElementById('resultado1').innerText = `Maior número: ${maior}`;
});

document.getElementById('ordenarForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById('ordNum1').value);
    const num2 = parseFloat(document.getElementById('ordNum2').value);
    const num3 = parseFloat(document.getElementById('ordNum3').value);

    const ordenados = [num1, num2, num3].sort((a, b) => a - b);
    document.getElementById('resultado2').innerText = `Números em ordem crescente: ${ordenados.join(', ')}`;
});

document.getElementById('palindromoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const str = document.getElementById('palindromoStr').value.toUpperCase();
    const palindromo = str === str.split('').reverse().join('');
    document.getElementById('resultado3').innerText = `É palíndromo: ${palindromo ? 'Sim' : 'Não'}`;
});