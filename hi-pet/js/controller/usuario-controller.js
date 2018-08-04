class UsuarioController {

    lerUsuario(usuario) {
        // ler usuário
        usuario.nome = document.getElementById("nome").value;
        usuario.email = document.getElementById("email").value;
        usuario.senha = document.getElementById("senha").value;
        if (document.getElementById("id").value) {
            usuario.id = document.getElementById("id").value;
        }
    }

    limparFormulario() {
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("senha").value = "";
    }

    atualizar() {
        let usuario = new Usuario();
        this.lerUsuario(usuario);
        usuario.atualizar();
        alert("Usuário atualizado com sucesso!");
        this.limparFormulario();
        this.carregarTabela();
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

            // criar a célula da edição
            let celulaAcao = linha.insertCell();

            let imgEditar = document.createElement("img");
            imgEditar.src = "img/edit.svg";
            celulaAcao.appendChild(imgEditar);
            imgEditar.setAttribute("onclick", "usuarioController.carregarUsuario(" + JSON.stringify(usuarios[i]) + ")")

            let imgDeletar = document.createElement("img");
            imgDeletar.src = "img/delete.svg";
            celulaAcao.appendChild(imgDeletar);
            imgDeletar.setAttribute("onclick", "usuarioController.remover(" + usuarios[i].id + ")");
        }

    }

    remover(id) {
        let usuario = new Usuario(); // Instanciando o modelo Usuario
        usuario.remover(id);
        alert("Usuário removido com sucesso!");
        this.carregarTabela();
    }

    carregarUsuario(usuario) {
        document.getElementById("id").value = usuario.id;
        document.getElementById("nome").value = usuario.nome;
        document.getElementById("email").value = usuario.email;
        document.getElementById("senha").value = usuario.senha;
    }

}