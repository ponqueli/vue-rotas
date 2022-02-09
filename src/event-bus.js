import Vue from "vue";

export default new Vue({
  data: {
    autenticado: false,
    contatos:[
      { id: 1, nome: 'Isaac Newton', email: 'isaac@email.com' },
      { id: 2, nome: 'Albert Einstein', email: 'eisten@email.com' },
      { id: 3, nome: 'Stephen Hawking', email: 'stephen@email.com' },
    ]
  },
  created() {
    this.$on("autenticar", (autenticado) => {
      this.autenticado = autenticado;
    });
  },
  methods:{
    buscarContato(id){
      return Object.assign({}, this.contatos.find(c => c.id === id))
    },
    editarContato(contato){
      const indice = this.contatos.findIndex(c => c.id === contato.id)
      this.contatos.splice(indice, 1, contato)
    },
    inserirContato(contato){
      let maxID = Math.max.apply(Math,this.contatos.map((c)=>{ return c.id }))
      let newID = ++maxID
      this.contatos.push({id:newID, nome: contato.nome, email: contato.email})
    },
    excluirContato(id){
      const indice = this.contatos.findIndex(c => c.id === id)
      this.contatos.splice(indice, 1)
    }
  }
});
