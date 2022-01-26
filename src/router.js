import Vue from 'vue'
import VueRouter from 'vue-router'

import Contatos from './views/contatos/Contatos.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import Home from './views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    linkActiveClass: 'active',
    routes: [
        { path:'/contatos', component: Contatos },            // meus-contatos/contatos
        { path:'/contatos/:id', component: ContatoDetalhes }, // correspondencia dinamica de rota
        { path:'/', component: Home }                          // meus-contatos
    ]
})