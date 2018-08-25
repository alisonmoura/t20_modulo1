class Usuario{

    constructor(){
        this.nome;
        this.email;
        this.senha;
    }

    static validar(usuario){
        let erros = [];
        if(!usuario.nome) erros.push({ exibir: true, mensagem: "Preencha o nome" }); // !usuario.nome equivale a usuario.nome == undefined ou null ou ""
        if(!usuario.email) erros.push({ exibir: true, mensagem: "Preencha o email" });
        if(!usuario.senha) erros.push({ exibir: true, mensagem: "Preencha a senha" });
        return erros;
    }

    static cadastrar(usuario){
        localStorage.setItem("usuario", JSON.stringify(usuario))
    }

    static buscar(){
        return JSON.parse(localStorage.getItem("usuario"));
    }

    static remover(){
        localStorage.removeItem("usuario");
    }

}