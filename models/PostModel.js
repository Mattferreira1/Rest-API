class PostModel {
    static lista =[
        {
            id:0,
            titulo:"dsdsd",
            conteudo:"verdade"
        }
    ]
    static listar(){
        return PostModel.lista
    }
    
    static consultarPorId(id){
        const dados= PostModel.lista.filter(item => item.id === id)
        console.log(dados);
        
        return dados
    }

    static criar(data){
        PostModel.lista.push(data)
    }

    static atualizar(id, data){
        if(PostModel.lista.filter(item => item.id == id)){
            PostModel.lista[id]= data
        console.log(PostModel.lista[id]);
        }
    }

    static deletar(id){
        if(PostModel.lista.filter(item => item.id == id)){
            PostModel.lista.splice(id, 1)
            console.log("deletado");
            
        }
        // outra Forma (repovoar a lista com os ids diferentes do desejado)
        // const dados = PostModel.lista.filter(item => item.id != id)
        // UsuariosModel.lista += dados;
    }
}
module.exports  = PostModel