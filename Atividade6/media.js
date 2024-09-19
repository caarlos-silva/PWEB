function calcularMedia() {
    let nome = document.getElementById('nome').value;
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let nota4 = parseFloat(document.getElementById('nota4').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        alert("Insira todas as notas corretamente.");
        return;
    }

    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    alert(`A média de ${nome} é ${media.toFixed(2)}`);
}
