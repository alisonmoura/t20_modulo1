class Usuario {

    constructor() {
        this.nome;
        this.email;
        this.senha;
    }

    validar(usuario){
        var falha = "";
        // verificar nome
        if(usuario.nome == "") falha += "Preencha o nome\n";

        // verificar email
        if(usuario.email == "") falha += "Preencha o email\n";

        // verificar senha
        if(usuario.senha == "") falha += "Preencha a senha\n";
        
        return falha;
    }

    // Método cadastrar
    cadastrar() {

        // ler o vetor do localStorage
        var usuarios = this.buscarTodos();

        // adicionar o 'this' no vetor
        usuarios.push(this);

        // atualizar vetor no localStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

    }

    buscarTodos() {
        var usuarios = JSON.parse(localStorage.getItem("usuarios")) // corvert a string para objeto

        if (!usuarios) {
            return [];
        } else {
            return usuarios;
        }

    }

    // Método atualizar
    atualizar() {

    }

    // Método remover
    remover() {

    }

    // Método buscar
    buscar() {

    }
}