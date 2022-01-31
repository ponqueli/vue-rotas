<template>
    <div>
        <h3 class="font-weight-light"> Editar contato com id: {{ id }} </h3>
        <button class="btn btn-secondary mt-4 mb-4"  @click="voltar">Voltar</button>
    </div>

</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            curso: 'Curso de VueJS'
        }
    },
    beforeRouteEnter(to, from, next) { //guarda de rota implementada diretamente no component
        console.log('beforeRouteEnter')
        /*if (to.query.autenticado === "true") {
            //está assim apenas para fins de teste
            return next((vm)=>{ //pode chamar um callback aqui para ter acesso a instancia, anteriormente nao tinha, só tem acesso aqui
                console.log("Dentro de beforeRouteEnter: " + vm.curso)
            });
        }
        next("/contatos"); //poderia ir para login se tivesse autenticação */
        next()
    },
    beforeRouteLeave(to, from, next){ //PREVINE O USUARIO DE SAIR ACIDENTALMENTE DE UMA DETERMINADA ROTA
        console.log('beforeRouteLeave')
        const confirmar = window.confirm("Deseja realmente sair?")
        next(confirmar)
    },
    methods:{
        voltar(){
            this.$router.back()
        }
    }
}
</script>