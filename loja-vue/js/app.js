// Inicializar Vuejs
new Vue({
    // dados
    data: {
        titulo: "Lojinha Vue em Vue!",
        usuario: {},
        usuarioLogado: null,
        desabilitado: true
    },
    methods: {
        salvar() {
            this.usuarioLogado = this.usuario;
            alert("Usuário salvo com sucesso!");
        }
    },
    // ponto de montagem
    el: "#app"
});