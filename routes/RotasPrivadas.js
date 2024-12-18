const express = require("express")
const usuariosRotas = require("./usuariosRotas")
require("dotenv").config()
const jwt = require("jsonwebtoken")
const postRotas = require("./postRotas")
const RotasPrivadas = express.Router()

RotasPrivadas.use((request, response, next)=>{ 
    let auth = false
    if(request.headers.token){
        const {token} = request.headers
        try{
            jwt.verify(token, process.env.APP_KEY_TOKEN)
            auth = true

        }catch(e){
            return response.status(403).send(e)
        }
    }
    next()
})
RotasPrivadas.use(usuariosRotas)
RotasPrivadas.use(postRotas)

module.exports = RotasPrivadas