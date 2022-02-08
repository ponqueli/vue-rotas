<template>
    <div>
        <h3 class="font-weight-light">Detalhes sobre o Contato com id:  {{ id }} </h3>
        <div style="height: 900px"></div>
        <p id="parametros">Parâmetros: {{ parametros }}</p>
        <p>Hash: {{ $route.hash }}</p>
        <router-link
            :to="`/contatos/${id}/editar`"
            class="btn btn-primary">
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data(){
        return{
            parametros: this.$route.params
        }
    },
    beforeRouteUpdate(to, from, next){
        console.log("BeforeRouteUpdate") //chamada qdo o parâmetro da rota foi mudado e o componente é reutilizado
        this.parametros = to.params
        next()
    }
}
</script>