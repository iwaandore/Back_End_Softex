const entrada = require("prompt-sync")({ sigint: true });

function Banco(conta, saldo, tipo_conta, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipo_conta = tipo_conta;
    this.agencia = agencia;
}

function buscarSaldo() {
    console.log("Saldo:" + minhaConta.saldo)
}

function deposito(val) {
    minhaConta.saldo += val
}

function saque(val) {
    minhaConta.saldo -= val
}

function numeroConta() {
    console.log("Número da conta:" + minhaConta.conta + "\nAgência:" + minhaConta.agencia)
}

var minhaConta = new Banco("69", 1000, "Corrente", "001");

while (op != 0) {
    console.log("[1]BUSCAR SALDO\n[2]DEPÓSITO\n[3]SAQUE\n[4]NÚMERO DA CONTA\n[0]Sair");
    var op = Number(entrada())

    if (op == 1) {
        buscarSaldo()
    }
    else if (op == 2) {
        var d = Number(entrada("Digite o valor do depósito:"))
        if (d > 2000) {
            console.log("Desculpe, o seu valor de depósito excedeu o limite estabelecido para o seu tipo de conta, tente novamente mais tarde.")
        } else {
            deposito(d)
        }
    } else if (op == 3) {
        var s = Number(entrada("Digite o valor do saque:"))
        if (s > minhaConta.saldo) {
            console.log("ERRO: Saque maior que o seu saldo.")
        } else {
            saque(s)
        }
    } else if (op == 4) {
        numeroConta()
    } else if (op == 0) {
        console.log("Saindo")
        break
    } else {
        console.log("Número inválido")
    }
}