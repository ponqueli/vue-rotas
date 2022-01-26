<template>
    <div>
        <h3 class="font-weight-light">Detalhes sobre o contato</h3>
        <h2 class="font-weight-light"> ID: {{ id }} </h2>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id: this.$route.params.id
        }
    },
    beforeRouteUpdate(to, from, next){
        this.id = to.params.id
        next()
    },
    created(){
        console.log(this.$route.params)
    }
}
</script>