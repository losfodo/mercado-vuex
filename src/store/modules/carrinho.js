export default {//exporta do store.js dividir em arquivos para ficar organizado o store
    namespaced: true,//para não aver comflito entre os nomes do dados store e referenciar carrinho nas maps dai para nomeação da template ficaria assim ...mapActions("carrinho", ["adicionarProduto"]), tendo q colocar carrinho antes q não precisava
    state: {
        produtos: []
    },
    getters: { //cria getters com calculo do total abaixo ppara colocar no resumo.vue
        valorTotal(state) {//calculo do valor total
            return state.produtos.map(p => p.quantidade * p.preco)//pega com map quantidade * preço
                .reduce((total, atual) => total + atual, 0)//e faz reduce(acumulador, atual do map , inicia do 0)
        }
    },
    mutations: {//é equivalente ao setter função de alterar o dado da store state global da aplicação
        adicionarProduto(state, payload) {//payload: sera o proprio produto pode colocar o que quiser,state para alterar o estado
            state.produtos.push(payload)//faz um push de payload ou seja produtos
        }//state: com apenas state acessa state apenas desse modulo e não global q seria rootState
    },
    actions: {
        adicionarProduto({ commit }, payload) {// commit: equivale ao um this //OBS:se quiser ter acesso global coloca se { commit, state, rootState}rootState
            setTimeout(() => {//tempo de 1000 1segundo
                commit('adicionarProduto', payload)//add produto apos 1 segundo
            }, 1000)
        }
    }

    /*
    actions: {// outra forma colocando root como true
        root: true,
        handler({ commit }, payload) {// commit: equivale ao um this //OBS:se quiser ter acesso global coloca se { commit, state, rootState}rootState
            setTimeout(() => {//tempo de 1000 1segundo
                commit('adicionarProduto', payload)//add produto apos 1 segundo
            }, 1000) //nesse caso na template ficaria assim ...mapActions([adicionarProduto]) sem precisar colocar carrinho antes como com namespace
        }
    }
     */

    /*
    actions: {// aqui mostra como acessar o rootState da aplicação q é state do store global da aplicação no store.js,, OBS:o msm seria se for getters tbm ocorre
        adicionarProduto({ commit, state, rootState }, payload) {// commit: equivale ao um this //OBS:se quiser ter acesso global coloca se { commit, state, rootState}rootState
            setTimeout(() => {//tempo de 1000 1segundo
                commit('adicionarProduto', payload)//add produto apos 1 segundo
            }, 1000)
        }
    }
     */

    /* actions: { //outra fotma de fazer action acima só q sem o destructuring { commit }
        adicionarProduto(context, payload) {// commit: equivale ao um this //OBS:se quiser ter acesso global coloca se { commit, state, rootState}rootState
            setTimeout(() => {//tempo de 1000 1segundo
                context.commit('adicionarProduto', payload)//add produto apos 1 segundo
            }, 1000)
        }
    }
     */
}