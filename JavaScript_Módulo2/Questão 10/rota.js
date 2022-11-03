const express = require('express')
const app = express();

app.get('/AnimesOnline', (request, response) => {
    return response.send("Hello World");
});

app.listen(777);
console.log("Rodando...")
