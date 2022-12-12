class Pato {
    constructor(pato) {
        this.pato = pato
    }
    fazerQuaQua() {
        this.pato = console.log('QuaQua')
    }
    voar() {
        this.pato = console.log('Voando...')
    }
}
class AdaptadorPatoDemo extends Pato {
    constructor() {
        super(Pato)
    }
    fazerQuaQua() {
        this.pato = console.log('QuaQua')
    }
    voar() {
        this.pato = console.log('Voando...')
    }
}
class Galinha {
    constructor(galinha) {
        this.galinha = galinha
    }
    fazerCocorico() {
        this.galinha = console.log('Cocorico')
    }
}
class AdaptadorPato extends Galinha {
    constructor() {
        super(Galinha)
    }
    fazerQuaQua() {
        this.galinha = console.log('Cocorico')
    }
    voar() {
        this.galinha = console.log('Voando...')
    }
}
const adaptadorPato = new AdaptadorPato()
adaptadorPato.fazerQuaQua()
adaptadorPato.voar()
