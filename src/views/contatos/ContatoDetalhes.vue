<template>
    <div v-if="contato">
        <h3 class="font-weight-light">Nome:  {{ contato.nome }} </h3>
        <p>Email: {{ contato.email }}</p>
        <button 
            class="btn btn-secondary mr-2"
            @click="$router.back()">
            Voltar
        </button>
        <router-link
            :to="`/contatos/${id}/editar`"
            class="btn btn-primary mr-2">
            Editar
        </router-link>
        <button 
            type="btn" 
            class="btn btn-danger mr-2"
            @click="excluir">
            Excluir
        </button>
    </div>
</template>

<script>

import EventBus from '@/event-bus'
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data(){
        return{
            contato: undefined,
            estaCancelado: true
        }
    },
    // created(){
    //     this.contato = EventBus.buscarContato(this.id)
    // },
    beforeRouteEnter(to, from, next){
        next(vm => {
            vm.contato = EventBus.buscarContato(vm.id)
        })  
    },
    beforeRouteUpdate(to, from, next){//chamada qdo o parâmetro da rota foi mudado e o componente é reutilizado
         this.contato = EventBus.buscarContato(this.id)
        next()
    },
    beforeRouteLeave(to,from,next){
        this.estaCancelando
            ? next(window.confirm("Deseja realmente sair?"))
            : next()
    },
    methods:{
        excluir(){
            EventBus.excluirContato(this.id)
            this.estaCancelando = false
            this.$router.push('/contatos')
        }
    }
}
</script>