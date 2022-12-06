class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }
}
class Aplicacao {
    array() {
        const Array = []
        const arrayPrototype = Object.create(Array)
        Array.unshift(van.getVan(), van2.getVan(), van3.getVan(), onibus.getOnibus(), onibus2.getOnibus(), onibus3.getOnibus())
        console.log(Array)
        console.log(arrayPrototype.toString())
    }
}
class Van extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPorta) {
        super(modelo, marca, cor, numeroRodas)
        this.numeroPorta = numeroPorta;
    }
    getVan() {
        return 'Modelo: ' + this.modelo + ' Marca: ' + this.marca + ' Cor: ' + this.cor + ' NumeroRodas: ' + this.numeroRodas + ' NumeroPortas: ' + this.numeroPorta;
    }
}
class Onibus extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroAssento) {
        super(modelo, marca, cor, numeroRodas, numeroAssento)
        this.numeroAssento = numeroAssento;
    }
    getOnibus() {
        return 'Modelo: ' + this.modelo + ' Marca: ' + this.marca + ' Cor: ' + this.cor + ' NumeroRodas: ' + this.numeroRodas + ' NumeroAssento: ' + this.numeroAssento;
    }
}
const van = new Van('Van', 'Fiat', 'rosa', 4, 5)
const van2 = new Van('Van', 'Ferrari', 'azul', 4, 3)
const van3 = new Van('Van', 'Mercedes', 'prata', 4, 3)
const onibus = new Onibus('Onibûs', 'Sedan', 'roxo', 4, 12)
const onibus2 = new Onibus('Onibûs', 'Toyota', 'vermelho', 4, 18)
const onibus3 = new Onibus('Onibûs', 'Soares', 'vinho', 4, 40)
const aplicacao = new Aplicacao('')
aplicacao.array()


