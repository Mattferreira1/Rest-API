const UsuariosModel = require("../models/UsuariosModel");

class AuthController{
    login(login, senha){
        const dados = UsuariosModel.autenticate(login,senha)
        console.log(dados);
        
        return dados
    }
}

module.exports = AuthController