<template>
    <Painel titulo="Carrinho" azul :notificacao="produtos.length"><!--total de produtos passados lenght-->
        <div class="carrinho">
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Qtde</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="produto in produtos" :key="produto.nome">
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.quantidade }}</td>
                        <td>{{ produto.preco | dinheiro }}</td><!--filtro com dinheiro com $ e virgula aplicado no preço-->
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="total">
                <span>Total: <strong>{{ total | dinheiro }}</strong></span><!--total colocado template..-->
            </div>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('carrinho', { //pegar os dados com mapGetters com total
            total: 'valorTotal' //acessa total
        }),
        // total() { usando getters Total fica referenciado acima OBS:não é necessario importar mapGetters vuex
        //     return this.$store.getters.valorTotal
        // },
        produtos() {//metodo função produtos
            return this.$store.state.carrinho.produtos //acessar dado direto do store faz todo o caminho para pegar o array de produtos
        }
    }
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

    hr {
        margin-top: 30px;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }
</style>
