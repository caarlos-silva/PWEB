function calcularOperacoes() {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Insira apenas números.");
        return;
    }

    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let produto = numero1 * numero2;
    let divisao = numero1 / numero2;
    let resto = numero1 % numero2;

    alert(`Soma: ${soma}\nSubtração: ${subtracao}\nProduto: ${produto}\nDivisão: ${divisao}\nResto: ${resto}`);
}
