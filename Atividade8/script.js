document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value;
    const opiniao = parseInt(document.getElementById('opiniao').value);

    const resultados = document.getElementById('resultados');
    const dados = JSON.parse(localStorage.getItem('dadosPesquisa')) || [];

    dados.push({ idade, sexo, opiniao });
    localStorage.setItem('dadosPesquisa', JSON.stringify(dados));

    let totalIdade = 0;
    let maiorIdade = 0;
    let menorIdade = 0;
    let pessimoCount = 0;
    let otimoBomCount = 0;
    let masculinoCount = 0;
    let femininoCount = 0;

    dados.forEach(dado => {
        totalIdade += dado.idade;
        if (dado.idade > maiorIdade) maiorIdade = dado.idade;
        if (dado.idade < menorIdade) menorIdade = dado.idade;
        if (dado.opiniao === 1) pessimoCount++;
        if (dado.opiniao === 4 || dado.opiniao === 3) otimoBomCount++;
        if (dado.sexo === 'M') masculinoCount++;
        if (dado.sexo === 'F') femininoCount++;
    });

    const mediaIdade = (totalIdade / dados.length).toFixed(2);
    const porcentagemOtimoBom = ((otimoBomCount / dados.length) * 100).toFixed(2);

    resultados.innerHTML = `
        <p>Média da idade: ${mediaIdade}</p>
        <p>Idade da pessoa mais velha: ${maiorIdade}</p>
        <p>Idade da pessoa mais nova: ${menorIdade}</p>
        <p>Quantidade de pessoas que responderam péssimo: ${pessimoCount}</p>
        <p>Porcentagem de pessoas que responderam ótimo e bom: ${porcentagemOtimoBom}%</p>
        <p>Número de mulheres que responderam: ${femininoCount}</p>
        <p>Número de homens que responderam: ${masculinoCount}</p>
    `;
});
