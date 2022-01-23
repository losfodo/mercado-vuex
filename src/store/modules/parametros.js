export default {//store separado de parametros
    state: {//estado de parametros padrão.. possibilidade de alterar dentro da propria instancia
        quantidade: 2,//estados das mutations parametros abaixo
        preco: 19.99
    },
    mutations: {// a ver com get e set de parametros.vue
        setQuantidade(state, payload) {
            state.quantidade = payload //quantidade vai receber produtos
        },
        setPreco(state, payload) {
            state.preco = payload //preço recebe produtos
        }
    }
}