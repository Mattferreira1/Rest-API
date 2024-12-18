const express = require("express")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const RotasPublicas = express.Router()
const AuthController = require("../controller/AuthController")

RotasPublicas.post("/login", (request, response)=>{
    const body = request.body
    const auth = new AuthController()
    const dados = auth.login(body.login, body.senha)
    console.log(dados);
    
    if(dados){
        const token = jwt.sign(dados, process.env.APP_KEY_TOKEN)
        return response.json({
            token: token
        })
    }
    return response.json({
        mensage:"login ou senha incorreto"
    })

})

module.exports = RotasPublicas