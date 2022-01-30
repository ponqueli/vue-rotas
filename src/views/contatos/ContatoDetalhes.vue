<template>
    <div>
        <h3 class="font-weight-light">Detalhes sobre o Contato com id:  {{ id }} </h3>
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
    created(){
        console.log(this.$props)
    }
}
</script>