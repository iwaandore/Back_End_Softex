
async () => {
    const cadastro = require('./banco');
    const database = require('./db');

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
