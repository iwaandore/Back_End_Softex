const entrada = require("prompt-sync")({ sigint: true })


function interface_calculadora() {
    console.log("Digite o tipo da operação:\n[*]Multiplicação\n[/]Divisão\n[+]Soma\n[-]Subtração")
}

function calculadora(op) {
    var n1 = Number(entrada("Digite o número 1:"));
    var n2 = Number(entrada("Digite o número 2:"));
    var resultado = Number

    const soma = (n1, n2) => {
        resultado = n1 + n2
        return (resultado)
    }
    const sub = (n1, n2) => {
        resultado = n1 - n2
        return (resultado)
    }
    const mult = (n1, n2) => {
        resultado = n1 * n2
        return (resultado)
    }
    const div = (n1, n2) => {
        resultado = n1 / n2
        return (resultado)
    }
    if (op == "*") {
        mult(n1, n2)
    } else if (op == "/") {
        div(n1, n2)
    } else if (op == "+") {
        soma(n1, n2)
    } else if (op == "-") {
        sub(n1, n2)
    }
    console.log(resultado)

}

interface_calculadora()
var op = entrada()
calculadora(op)
