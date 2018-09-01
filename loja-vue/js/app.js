// Inicializar Vuejs
new Vue({
    // registro de components
    components: {
        Propaganda
    },
    // dados
    data: {
        titulo: "Lojinha Vue em Vue!",
        usuario: {},
        usuarioLogado: null,
        alert: false,
        erros: [],
        produtos: [
            {
                nome: "Cerveja",
                marca: "Skol",
                preco: 1.89,
                imagem: "http://formulachopp.cdn.3techstore.com.br/img/p/7/5/4/754-large_default.jpg"
            },
            {
                nome: "Cerveja",
                marca: "Heineken",
                preco: 3.30,
                imagem: "https://cervejastore.vteximg.com.br/arquivos/ids/155927-1000-1000/heineken.jpg?v=636166141076670000"
            },
            {
                nome: "Cerveja",
                marca: "Estella",
                preco: 3.30,
                imagem: "https://savegnago.vteximg.com.br/arquivos/ids/283127-1000-1000/figura-1frente.jpg?v=636421071411530000"
            },
            {
                nome: "Cerveja",
                marca: "Eisenbahn",
                preco: 2.30,
                imagem: "https://mambo.vteximg.com.br/arquivos/ids/169671/7898367980010_cerveja_hisenbahn_355ml_01.jpg?v=635562630040570000"
            }
        ]
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