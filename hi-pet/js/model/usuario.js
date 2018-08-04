class Usuario {

    constructor() {
        this.id = new Date().getTime();
        this.nome;
        this.email;
        this.senha;
    }

    validar(usuario) {
        var falha = "";
        // verificar nome
        if (usuario.nome == "") falha += "Preencha o nome\n";

        // verificar email
        if (usuario.email == "") falha += "Preencha o email\n";

        // verificar senha
        if (usuario.senha == "") falha += "Preencha a senha\n";

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

        let usuarios = this.buscarTodos();

        // usuario: this
        for (let i = 0; i < usuarios.length; i++) {
            if (this.id == usuarios[i].id) {
                usuarios[i] = this; //atualização
                // atualizar vetor no localStorage
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                break;
            }
        }

    }

    // Método remover
    remover(id) {

        let usuarios = this.buscarTodos();

        for (let i = 0; i < usuarios.length; i++) {
            if(id == usuarios[i].id){
                // Remover usuario na posição i
                usuarios.splice(i,1);
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
                break;
            }
        }

    }

    // Método buscar
    buscar() {

    }
}