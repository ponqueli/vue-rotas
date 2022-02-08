<template>
    <ContatosLista :busca="busca" />
</template>
<script>

import ContatosLista from '../../components/contatos/ContatosLista.vue'
export default {
    props: ['busca'],
    components: {
        ContatosLista
    }
}
</script>