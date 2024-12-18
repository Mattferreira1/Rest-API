const express = require("express")
const postRotas = express.Router()
const PostController = require("../controller/PostController")

const postController = new PostController()


postRotas.get("/posts", postController.listar)

postRotas.get("/posts/:id", postController.consultarPorId)

postRotas.post("/posts", postController.criar)

postRotas.put("/posts/:id",postController.atualizar )

postRotas.delete("/posts/:id", postController.deletar)

module.exports = postRotas