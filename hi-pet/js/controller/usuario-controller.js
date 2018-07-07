class UsuarioController{

    salvar(){
        // instanciar usuário
        var usuario = new Usuario();

        // ler usuário
        usuario.nome = document.getElementById("nome").value;
        usuario.email = document.getElementById("email").value;
        usuario.senha = document.getElementById("senha").value;

        // salvar usuário
        usuario.cadastrar();
    }

}