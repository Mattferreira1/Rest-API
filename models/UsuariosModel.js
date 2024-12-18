class UsuariosModel{

    static lista =[
        {
            id:0,
            nome:"",
            idade:"",
            login:"admin",
            senha:"123123"
        }
    ]
    static autenticate(login, senha){
        console.log(login, senha);
        
        const indice = UsuariosModel.lista.findIndex(item => item.login == login && item.senha == senha)
        console.log(UsuariosModel.lista[indice]);
        
        return UsuariosModel.lista[indice]
    }
    static listar(){
        return UsuariosModel.lista
    }
    
    static consultarPorId(id){
        const dados= UsuariosModel.lista.filter(item => item.id === id)
        return dados
    }

    static criar(data){
        UsuariosModel.lista.push(data)
    }

    static atualizar(id, data){
        if(UsuariosModel.lista.filter(item => item.id == id)){
            UsuariosModel.lista[id]= data
        console.log(UsuariosModel.lista[id]);
        }
    }

    static deletar(id){
        if(UsuariosModel.lista.filter(item => item.id == id)){
            UsuariosModel.lista.splice(id, 1)
            console.log("deletado");
            
        }
        // outra Forma (repovoar a lista com os ids diferentes do desejado)
        // const dados = UsuariosModel.lista.filter(item => item.id != id)
        // UsuariosModel.lista += dados;
    }
}
module.exports = UsuariosModel