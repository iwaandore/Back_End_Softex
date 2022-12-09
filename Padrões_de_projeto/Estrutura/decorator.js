class Sanduiche {
    custo() {
        return 'Sanduíche de Frango Assado, Pepperoni, QueijoMussarelaRalado custa: R$' + frango.custo()
    }
}
class FrangoAssado extends Sanduiche {
    custo() {
        return queijo.custo() + pepperoni.custo() + 4.50;
    }
}
class Pepperoni extends FrangoAssado {
    custo() {
        return 0.99;
    }
}
class QueijoMussarelaRalado extends FrangoAssado {
    custo() {
        return 2.00;
    }
}
const frango = new FrangoAssado()
const queijo = new QueijoMussarelaRalado()
const pepperoni = new Pepperoni()
const sanduiche = new Sanduiche()
console.log(sanduiche.custo())