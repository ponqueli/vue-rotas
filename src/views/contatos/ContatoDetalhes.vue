<template>
<div>
    <h3 class="font-weight-light">Detalhes sobre o contato</h3>
    <h2 class="font-weight-light"> ID: {{ $route.params.id }}</h2>
</div>
</template>

<script>
export default {
    created(){
        console.log(this.$route.params)
    }
}
</script>