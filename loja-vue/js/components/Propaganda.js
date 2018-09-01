let Propaganda = Vue.component('propaganda', {
    data(){
        return {
            text: 'Anuncie aqui!'
        }
    },
    template: `
    <v-card color="grey" class="white--text">
        <h2>Propaganda:</h2>
        <v-card-text class="text-xs-center">
            {{text}}
        </v-card-text>
    </v-card>
    `
})