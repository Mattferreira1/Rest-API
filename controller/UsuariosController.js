const  UsuariosModel = require("../models/UsuariosModel")
class UsuariosController {

    listar(request, response){

     const dados = UsuariosModel.listar()
     return response.json(dados)
    }

    consultarPorId(request, response){
        const id = request.params.id
        const dados = UsuariosModel.consultarPorId(id)
        response.json(dados)
    }

    criar(request, response){
        const body = request.body
        console.log(body)
        UsuariosModel.criar(body)
        return response.status(201).send("usuario adicionado com sucesso")
    }

    atualizar(request, response){
        const id = request.params.id
        const dados= request.body
        UsuariosModel.atualizar(id, dados)
        return response.status(200).send("usuario atualizado com sucesso")
    }

    deletar(request, response){
        const id = request.params.id
        UsuariosModel.deletar(id)
        response.end("Usuário deletado")
    }
}

module.exports = UsuariosController