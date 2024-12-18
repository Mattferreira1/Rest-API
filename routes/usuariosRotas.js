const express = require("express")
const usuariosRotas = express.Router()
const UsuariosController = require("../controller/UsuariosController")

const usuariosController = new UsuariosController()

usuariosRotas.get("/users", usuariosController.listar)

usuariosRotas.get("/users/:id", usuariosController.consultarPorId)

usuariosRotas.post("/users", usuariosController.criar)

usuariosRotas.put("/users/:id",usuariosController.atualizar )

usuariosRotas.delete("/users/:id", usuariosController.deletar)

module.exports = usuariosRotas