// Inicializar Vuejs
new Vue({
    // dados
    data: {
        titulo: "Lojinha Vue em Vue!",
        usuario: {},
        usuarioLogado: null,
        alert: false,
        erros: []
    },
    mounted(){ // onload da tela
        this.usuarioLogado = Usuario.buscar();
    },
    methods: {
        logout(){
            Usuario.remover();
            this.usuarioLogado = null;
        },
        salvar() {
            this.erros = Usuario.validar(this.usuario);
            if(this.erros.length >= 1) this.alert = true;
            else {
                alert("Usuário salvo com sucesso!");
                this.usuarioLogado = this.usuario;
                Usuario.cadastrar(this.usuario) //Salvar o usuário no localstorage
            }
        }
    },
    // ponto de montagem
    el: "#app"
});