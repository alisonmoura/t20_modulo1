<template>
    <v-app>
        <v-toolbar>
            <v-toolbar-title>
                Home
            </v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container>
                <v-layout>
                    <v-flex xs12>
                        <h1>{{titulo}}</h1>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>
<script>
export default {
    data() {
        return {
            titulo: 'Olá Vue Webpack'
        }
    }
}
</script>

