import Vue from 'vue'
import VueRouter from 'vue-router'

import Contatos from './views/contatos/Contatos.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import Home from './views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    linkActiveClass: 'active',
    routes: [
        { 
            path:'/contatos',                               // meus-contatos/contatos
            component: Contatos,
            children: [
                { path:':id', component: ContatoDetalhes, name: 'contato' }, // correspondencia dinamica de rota -  meus-contatos/contatos/2
                { path: '' , component: ContatosHome} 
            ]
        },            
        { path:'/', component: Home }                          // meus-contatos
    ]
})