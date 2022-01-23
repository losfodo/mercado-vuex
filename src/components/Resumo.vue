<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span><!--colocado assim no resumo-->
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex' //importa mapget para uso do vuex para uso no mapGetters abaixo

export default {
    computed: mapGetters('carrinho', { //passando mapgetters passando apenas nome do getter que quer obter
        total: 'valorTotal' //criando nome de total q aponta p valorTotal
    })
    // computed: mapGetters(['valorTotal'])// passar nome direto e referenciar no span valorTotal diretamente

    // computed: {//getters apenas são colocadas em computadas
    //     total() {//metodo total criado,,, OBS:não é necessario importar mapGetters vuex
    //         return this.$store.getters.valorTotal //retornando valor total do getters criado em carrinho.js
    //     }
    // }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
