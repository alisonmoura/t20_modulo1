class Usuario {

    constructor() {
        this.nome;
        this.email;
        this.senha;
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