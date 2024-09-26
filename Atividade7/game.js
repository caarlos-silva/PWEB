function jogar(escolhaJogador) {
    const escolhas = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = escolhas[Math.floor(Math.random() * 3)];
    let result = '';

    if (escolhaJogador === escolhaComputador) {
        result = 'Empate!';
    } else if (
        (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaJogador === 'tesoura' && escolhaComputador === 'papel') ||
        (escolhaJogador === 'papel' && escolhaComputador === 'pedra')
    ) {
        result = 'Você ganhou! ' + escolhaJogador + ' vence ' + escolhaComputador;
    } else {
        result = 'Você perdeu! ' + escolhaComputador + ' vence ' + escolhaJogador;
    }

    document.getElementById('result').innerText = result;
}
