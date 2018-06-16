
class JogadorController{

    // constructor(){
    //     this.jogador;
    // }

    salvar(){
        // Criar um novo jogador
        let jogador = new Jogador();
        this.lerJogador(jogador);
        this.imprimir(jogador);

    }

    imprimir(jogadorParaImpressao){
        console.log(jogadorParaImpressao);
    }

}

var jogadorController = new JogadorController();