function retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

document.getElementById('formRetangulo').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const meuRetangulo = new retangulo(base, altura);

    const area = meuRetangulo.calcularArea();
    document.getElementById('resultado').innerText = `A área do retângulo é: ${area}`;
});
