<template><!--loja onde adiciona os produtos-->
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade"><!---->
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco"><!--v-model:referencia com parametros.vue para se conectarem, number: para q seja apenas numero-->
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
import { mapActions } from "vuex"; //deve ser importado no arquivo que ira ter maps
//import { mapMutatios } from 'vuex' //não necessario mais mutations diretamente coloca actions acima q tinha recebido mutations em carrinho.js

export default {
  data() {
    return {
      sequencia: 1 //sequencia inicia como 1 ? para adicionar mais um produto
    };
  },
  computed: {
    //duas propriedades de parametros.vue com v-model para o que mudar no v-model parametros vira padrão na loja refletindo
    quantidade: {
      get() {
        return this.$store.state.parametros.quantidade; //caminho até a store no state de parametro.js pegando quantidade
      },
      set(valor) {
        //set com quantidade faz commit q é edição de mutation para poder editar valor assim como em parametros
        this.$store.commit("setQuantidade", valor);
      }
    },
    preco: {
      //preço pego pelo store
      get() {
        return this.$store.state.parametros.preco;
      },
      set(valor) {
        //OBS:loja virtual ao editar preço gera erro sem um set como em parametros pois falta implementar a mutations
        this.$store.commit("setPreco", valor);
      }
    }
    //preco(){ return this.$store.state.parametros.preco; }//outra forma sem o set com preco sendo um metodo
  },
  methods: {
    ...mapActions("carrinho", ["adicionarProduto"]), //necessario coloca spreed nos maps.. colocando carrinho para representar o namespace se não da erro
    
    //...mapMutatios(['adicionarProduto']) //quando esta direto na store
    
    // adicionarProduto(produto) {//dispatch passa um unico objeto apenas..
    //     this.$store.dispatch('adicionarProduto', produto)//chama dispatch para adicionar produto isso usando actions mas sem o map actions acima
    // },

    adicionar() {
      //metodo ou função botão para criar um produto novo
      const produto = {
        //dados que o produto vai ter
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`, //gera nome padrão produto conectando com sequencia id
        quantidade: this.quantidade,
        preco: this.preco
      };
      this.sequencia++; //++ vai adicionar id para ficar ordenado

      // this.$store.state.produtos.push(produto) //passando produto usando metodo push alterando diretamente desta forma no state
      // this.$store.commit('adicionarProduto', produto)// outra forma de passar nome produto com mutations
      this.adicionarProduto(produto); //passando apenas isso add produto da mutations ou actions de carrinho, aqui precisa do mapActions
      // this.$store.dispatch('adicionarProduto', produto) //dispatch: outra forma q funciona de adicionar produto com actions no caso
      //comentarios em cima do log faz com que não gere erros de alerta de console no terminal
      console.log(this.$store.getters.getNome); //revisar getters.js pelo console
      console.log(this.$store.getters.getNomeCompleto);
    }
  }
};
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
