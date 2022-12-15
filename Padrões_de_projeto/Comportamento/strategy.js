const entrada = require('prompt-sync')({ sigint: true })

class Strategy {
    execute() { }
}

class Soma extends Strategy {
    execute() {
        var resultado = Number
        resultado = n1 + n2
        return "Soma: " + resultado
    }
}

class Subtração extends Strategy {
    execute() {
        var resultado = Number
        resultado = n1 - n2
        return "Subtração: " + resultado
    }
}

class Multiplicação extends Strategy {
    execute() {
        var resultado = Number
        resultado = n1 * n2
        return "Multiplicação: " + resultado
    }
}
const soma = new Soma()
const subtracao = new Subtração()
const multiplicacao = new Multiplicação()
var n1 = Number(entrada("Digite o primeiro número: "))
var n2 = Number(entrada("Digite o segundo número: "))
console.log('[+]Soma\n[-]Subtração\n[*]Multiplicação')
var op = entrada()
const valor = {
    '+': soma.execute(n1, n2),
    '-': subtracao.execute(n1, n2),
    '*': multiplicacao.execute(n1, n2)
}
console.log(valor[op])