<template>
    
    <div>
        <ContatosLista :busca="busca" />
        <!-- exibe os componenets das rotas filhas da rota /contatos-->
        <router-view></router-view>
        <router-view name="contato-detalhes"></router-view>
    </div>
    
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