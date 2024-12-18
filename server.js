const express = require("express")
const RotasPrivadas = require("./routes/RotasPrivadas")
const RotasPublicas = require("./routes/RotasPublicas")
const app = express()
app.use(express.json())


app.get("/", (request, response)=>{
    return response.send("bem vindo ")
})
app.use(RotasPublicas)




app.use(RotasPrivadas)


app.get("/teste/:id", (request, response)=>{
    // query: opcional
    const query = request.query
    let dados= "teste"+ query.nome + query.sobrenome
    // params: obrigatorio
    const params = request.params
    dados += "params:" + params.id

    // body
    const body = request.body
    dados += JSON.stringify(body)
    response.send(dados)

})


app.listen(3000, "127.0.0.1", ()=>{
    console.log(`O server está rodando na porta http://127.0.0.1:3000`)
})