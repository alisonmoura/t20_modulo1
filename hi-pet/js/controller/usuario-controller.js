class UsuarioController {

    lerUsuario(usuario) {
        // ler usuário
        usuario.nome = document.getElementById("nome").value;
        usuario.email = document.getElementById("email").value;
        usuario.senha = document.getElementById("senha").value;
    }

    limparFormulario() {
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("senha").value = "";
    }

    salvar() {
        // instanciar usuário
        let usuario = new Usuario();
        // faz a leitura do usuário preenchido no formulário
        this.lerUsuario(usuario);
        // validar usuário
        let erro = usuario.validar(usuario);

        if (erro) {
            // tem erro
            alert(erro);
        } else {
            // não tem erro
            // salvar usuário
            usuario.cadastrar();
            // limpa o formulário
            this.limparFormulario();
            // mensagem de sucesso!
            alert("Usuário salvo com sucesso!");
            // recarrega a tabela
            this.carregarTabela();
        }

    }

    carregarTabela() {

        // instancia um usuario
        let usuario = new Usuario();

        // carregar o vetor do localStorage
        let usuarios = usuario.buscarTodos();

        // acessando a tabela
        let tabela = document.getElementById("tabela");

        // zerar tabela
        tabela.innerHTML = "";

        for (let i = 0; i < usuarios.length; i++) {

            // criar uma linha na tabela
            let linha = tabela.insertRow();

            // criar a célula do nome
            let celulaNome = linha.insertCell();
            celulaNome.innerText = usuarios[i].nome;

            // criar a célula do email
            let celulaEmail = linha.insertCell();
            celulaEmail.innerText = usuarios[i].email;
        }

    }

}