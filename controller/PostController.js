const PostModel = require("../models/PostModel")
class PostController {

    listar(request, response){

     const dados = PostModel.listar()
     return response.json(dados)
    }

    consultarPorId(request, response){
        const id = request.params.id
        const dados = PostModel.consultarPorId(id)
        response.json(dados)
    }

    criar(request, response){
        const body = request.body
        console.log(body)
        PostModel.criar(body)
        return response.status(201).send("Post adicionado com sucesso")
    }

    atualizar(request, response){
        const id = request.params.id
        const dados= request.body
        PostModel.atualizar(id, dados)
        return response.status(200).send("Post atualizado com sucesso")
    }

    deletar(request, response){
        const id = request.params.id
        PostModel.deletar(id)
        response.end("Post deletado")
    }
}

module.exports = PostController