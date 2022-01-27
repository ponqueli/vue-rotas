import Vue from 'vue'
import VueRouter from 'vue-router'

import Contatos from './views/contatos/Contatos.vue'
import ContatosHome from './views/contatos/ContatosHome.vue'
import ContatoDetalhes from './views/contatos/ContatoDetalhes.vue'
import ContatoEditar from './views/contatos/ContatoEditar.vue'
import Home from './views/Home.vue'

Vue.use(VueRouter)
//ROTAS GENERICAS SEMPRE DEVEM SER COLOCADOS ABAIXO NA LISTA DE CONFIGURAÇÃO
//ROTAS MAIS ESPECÍFICAS SEMPRE ACIMA!!!!
export default new VueRouter({
    mode:'history',
    linkActiveClass: 'active',
    routes: [
        { 
            //o que é definido aqui é visto dentro do router-view em Contatos.vue
            path:'/contatos',                               // meus-contatos/contatos
            component: Contatos,
            children: [
                { 
                    path:':id',  // correspondencia dinamica de rota -  meus-contatos/contatos/2
                    component: ContatoDetalhes, 
                    name: 'contato' 
                }, 
                { 
                    path: ':id/editar', // meus-contatos.com/contatos/2/editar
                    components:{
                        default: ContatoEditar,
                        'contato-detalhes': ContatoDetalhes    
                    } 
                }, 
                {   path: '', component: ContatosHome, name: "contatos" }  //rota filha default
            ]
        },         
        {  path:'/home',  component: Home },                    // meus-contatos
        //{  path:'/', redirect: '/contatos' }                          
        {  
            path:'/', redirect: () =>{
               // return '/contatos'
               return { name: 'contatos'}
            }
        }                          
    ]
})