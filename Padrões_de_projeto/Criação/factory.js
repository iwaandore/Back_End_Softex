const entrada = require("prompt-sync")({ sigint: true });

class Fabrica {

    constructor(Pc) {
        this._pc = Pc;
    }

    interface() {
        console.log("----------FABRICA----------\nO que desejas fabricar?\n[1]Pc\n[2]Server")
    }

    getcreate_() {
        return this._pc
    }

    setcreate_(ram, hdd, cpu, type) {
        this._pc = [ram, hdd, cpu, type]
    }

}

const create = new Fabrica("pc")

create.interface()
var op = entrada()
if (op == 1) {

    console.log("----------RAM----------")
    var r = Number(entrada("Insira a quantidade de Ram:"))

    console.log("----------HDD----------")
    var h = Number(entrada("Insira a quantidade de Hdd:"))
    if (h >= 1000) {
        console.log("----------CPU----------")
        var c = String(entrada("Insira a sua Cpu:"))
        create.setcreate_("Ram:" + r + "Gb", " HDD:" + h + "Tb", " Cpu:" + c + "Ghz", " Tipo:Pc")
        console.log(create.getcreate_().toString())
    } else {
        console.log("----------CPU----------")
        var c = String(entrada("Insira a sua Cpu:"))

        create.setcreate_("Ram:" + r + "Gb", " HDD:" + h + "Gb", " Cpu:" + c + "Ghz", " Tipo:Pc")
        console.log(create.getcreate_().toString())
    }
}
if (op == 2) {

    console.log("----------RAM----------")
    var r = Number(entrada("Insira a quantidade de Ram:"))

    console.log("----------HDD----------")
    var h = Number(entrada("Insira a quantidade de Hdd:"))
    if (h >= 1000) {
        console.log("----------CPU----------")
        var c = String(entrada("Insira a sua Cpu:"))
        create.setcreate_("Ram:" + r + "Gb", " HDD:" + h + "Tb", " Cpu:" + c + "Ghz", " Tipo:Server")
        console.log(create.getcreate_().toString())
    } else {
        console.log("----------CPU----------")
        var c = String(entrada("Insira a sua Cpu:"))

        create.setcreate_("Ram:" + r + "Gb", " HDD:" + h + "Gb", " Cpu:" + c + "Ghz", " Tipo:Server")
        console.log(create.getcreate_().toString())
    }
}
