const express = require('express')
const app = express()

app.get("/", (req,res)=>{
    res.send("Hello World")
})

const port = process.env.PORT||3030

app.listen(port, ()=>{
    console.log(`Rodando na porta ${port}`)
})