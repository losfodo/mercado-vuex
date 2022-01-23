import Vue from 'vue'
import App from './App.vue'
import store from './store/store' //deve ser importado o store no main para funcionar

Vue.config.productionTip = false

import Painel from './components/Painel' //painel registrado de forma global
Vue.component('Painel', Painel)

Vue.filter('dinheiro', valor => {//filtro do dinheiro para virgulhas e pontos com R$.. vue.:para instanciar algo para outro arquivo
	return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')//parseFloat:numeros quebrados o parseInt numeros inteiros
})

new Vue({
	store, //registra store dentro da instancia do main.js vue para ler os dados
	render: h => h(App),
}).$mount('#app')
