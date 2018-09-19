import Mensageiro from './Mensageiro';

class Main {

    constructor(mensagem) {
        Mensageiro.exibirMensagem(mensagem);
    }

}

new Main("Olá mundo em Webpack!");