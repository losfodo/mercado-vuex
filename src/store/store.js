import Vue from 'vue' //import padrão //store centraliza os dados para passar para templates que tiver em arquivos que for
import Vuex from 'vuex' //vuex: para usar mapgetters map states e mutations...

import carrinho from './modules/carrinho'//importa os 2 modulos .js do store pois aqui é store principal
import parametros from './modules/parametros'

import * as getters from './getters' //get serve para pegar um dado atraves da store e colocalo na template html de forma mais geral com *

Vue.use(Vuex) //para usar vuex

export default new Vuex.Store({//vuex fica sempre dentro da store com os dados backend.. passando a função construtora com objetos parametros..
    state: {//estado central do vuex store.. para funcionar é instanciado no mais.js o store
        nome: 'Rafael', //nome e sobrenome no story central..
        sobrenome: 'LinoLobo',
    },
    getters, //getters importado de getters.js com stado nome esobrenome..
    modules: { carrinho, parametros }//modulos ou arquivos.js importados acima devem ser referenciados desta forma

    //state: { 
        //getters: { //...getters } //caso tenha muitos getters para puxar no vuex.store state principal


   //     produtos: []
   // },
   // getters: { //cria getters com calculo do total abaixo ppara colocar no resumo.vue
   //     valorTotal(state) {//calculo do valor total
   //         return state.produtos.map(p => p.quantidade * p.preco)//pega com map quantidade * preço
   //             .reduce((total, atual) => total + atual, 0)//e faz reduce(acumulador, atual do map , inicia do 0)
    //},
   // mutations: {//é equivalente ao setter função de alterar o dado pela store
   //     adicionarProduto(state, payload) {//payload: sera o proprio produto pode colocar o que quiser
   //         state.produtos.push(payload)//faz um push de payload ou produtos
   //     }
   // },
   //actions: {
  //  adicionarProduto({ commit }, payload) {// commit: equivale ao um this ou destructuring espoe o metodo
  //      setTimeout(() => {//tempo de 1000 1segundo
   //         commit('adicionarProduto', payload)//add produto
   //     }, 1000)
  //  }
//}
})




//store: parte central onde circula getter, mutations e actions

//getters: acessar um valor que esta na store

//mutations: tipo setter faz commit para dentro da mutations para 'alterar um dado estado da store' ou o estado do store central
//actions: actions faz commit em uma ou mais mutations onde faz um dispath na action, coloca regras para alterar mutations com actions algum tipo de lógica, chamadas de backend, assincronismo
//..