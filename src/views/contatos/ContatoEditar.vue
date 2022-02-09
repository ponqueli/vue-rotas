<template>
    <div >
        <h3 class="font-weight-light"> Nome: {{ contato.nome }} </h3>
        
        <form @submit.prevent="salvar">
            <div class="form-group">
                <label>Nome:</label>
                <input 
                    type="text" 
                    class="form-control"
                    placeholder="Insira o nome"
                    v-model="contato.nome"
                >
            </div>
            <div class="form-group">
                <label>E-mail:</label>
                <input 
                    type="email" 
                    class="form-control"
                    placeholder="Insira o e-mail"
                    v-model="contato.email"
                >
            </div>
            <button type="button" class="btn btn-secondary mt-4 mr-2" @click="voltar">Voltar</button>
            <button type="submit" class="btn btn-success mt-4">Salvar</button>
        </form>
    </div>
</template>

<script>

import EventBus from '@/event-bus'


export default {
    props: ['id'],
    data(){
        return{
            contato:undefined,
            estaCancelando: true
        }
    },
    beforeRouteEnter(to, from, next){
        next(vm => {
            vm.contato = EventBus.buscarContato(vm.id)
        })  
    },
    // beforeRouteEnter(to, from, next) { //guarda de rota implementada diretamente no component
    //     console.log('beforeRouteEnter')
    //     /*if (to.query.autenticado === "true") {
    //         //está assim apenas para fins de teste
    //         return next((vm)=>{ //pode chamar um callback aqui para ter acesso a instancia, anteriormente nao tinha, só tem acesso aqui
    //             console.log("Dentro de beforeRouteEnter: " + vm.curso)
    //         });
    //     }
    //     next("/contatos"); //poderia ir para login se tivesse autenticação */
    //     next()
    // },
    beforeRouteLeave(to, from, next){ //PREVINE O USUARIO DE SAIR ACIDENTALMENTE DE UMA DETERMINADA ROTA
        console.log('beforeRouteLeave')
        this.estaCancelando
            ? next(window.confirm("Deseja realmente sair?"))
            : next()
    },
    methods:{
        voltar(){
            this.$router.back()
        },
        salvar(){
            if(this.contato){
                EventBus.editarContato(this.contato)
                this.estaCancelando = false
                this.$router.push('/contatos')
            }else{
                EventBus.inserirContato(this.contato)
            }
        }
    }
}
</script>