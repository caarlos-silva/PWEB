class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this.nomeCorrentista = nomeCorrentista;
        this.banco = banco;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    get NomeCorrentista() {
        return this.nomeCorrentista;
    }

    set NomeCorrentista(nome) {
        this.nomeCorrentista = nome;
    }

    get Banco() {
        return this.banco;
    }

    set Banco(banco) {
        this.banco = banco;
    }

    get NumeroConta() {
        return this.numeroConta;
    }

    set NumeroConta(numero) {
        this.numeroConta = numero;
    }

    get Saldo() {
        return this.saldo;
    }

    set Saldo(saldo) {
        this.saldo = saldo;
    }

    mostrarDados() {
        return `Nome: ${this.nomeCorrentista}, Banco: ${this.banco}, Número da Conta: ${this.numeroConta}, Saldo: R$ ${this.saldo}`;
    }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.saldoEspecial = saldoEspecial;
    }

    get SaldoEspecial() {
        return this.saldoEspecial;
    }

    set SaldoEspecial(saldoEspecial) {
        this.saldoEspecial = saldoEspecial;
    }

    mostrarDados() {
        return `${super.mostrarDados()}, Saldo Especial: R$ ${this.saldoEspecial}`;
    }
}

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.juros = juros;
        this.dataVencimento = dataVencimento;
    }

    get Juros() {
        return this.juros;
    }

    set Juros(juros) {
        this.juros = juros;
    }

    get DataVencimento() {
        return this.dataVencimento;
    }

    set DataVencimento(data) {
        this.dataVencimento = data;
    }

    mostrarDados() {
        return `${super.mostrarDados()}, Juros: ${this.juros}%, Data de Vencimento: ${this.dataVencimento}`;
    }
}

document.getElementById('criarCorrente').addEventListener('click', function() {
    const nome = document.getElementById('nomeCorrentista').value;
    const banco = document.getElementById('bancoCorrente').value;
    const numero = document.getElementById('numeroContaCorrente').value;
    const saldo = parseFloat(document.getElementById('saldoCorrente').value);
    const saldoEspecial = parseFloat(document.getElementById('saldoEspecial').value);

    const contaCorrente = new Corrente(nome, banco, numero, saldo, saldoEspecial);
    document.getElementById('resultado').innerText = contaCorrente.mostrarDados();
});

document.getElementById('criarPoupanca').addEventListener('click', function() {
    const nome = document.getElementById('nomePoupanca').value;
    const banco = document.getElementById('bancoPoupanca').value;
    const numero = document.getElementById('numeroContaPoupanca').value;
    const saldo = parseFloat(document.getElementById('saldoPoupanca').value);
    const juros = parseFloat(document.getElementById('juros').value);
    const dataVencimento = document.getElementById('dataVencimento').value;

    const contaPoupanca = new Poupanca(nome, banco, numero, saldo, juros, dataVencimento);
    document.getElementById('resultado').innerText = contaPoupanca.mostrarDados();
});
