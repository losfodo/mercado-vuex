<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>
export default {
    computed: {//faz os getters abaixos dos parametros com os get e set
        quantidade: {//quantidade é uma propriedade com metodos dentro.. OBS:seria um metodo se fosse um getter normal
            get () {//metodo get para ler o valor dos dados da store simplismente 
                return this.$store.state.parametros.quantidade //fazendo caminho para pegar o valor na store usando get q seria um getter no caso
            },
            set (valor) {// metodo set para modificar esses dados na store e para modificar usa a mutation
                this.$store.commit('setQuantidade', valor) //passa o novo valor.. e commit metodo ou função setQuantidade da mutation
            }
        },
        preco: {//metodo preço
            get () {
                return this.$store.state.parametros.preco
            },
            set (valor) {
                this.$store.commit('setPreco', valor)
            }
        }
    }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
