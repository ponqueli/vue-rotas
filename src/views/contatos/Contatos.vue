<template>
    
    <div>
        <ContatosLista :busca="busca" />
        <!-- exibe os componenets das rotas filhas da rota /contatos-->
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
        <transition name="slide" mode="out-in">
            <router-view name="contato-detalhes"></router-view>
        </transition>
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
<style scoped>
.slide-enter, .slide-leave-to{
    transform: translateX(-50px);
    opacity: 0;
}

.slide-enter-active, .slide-leave-active{
    transition: all 0.3s;
}
</style>