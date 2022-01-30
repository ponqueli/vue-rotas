import Vue from "vue";
import VueRouter from "vue-router";

import Contatos from "./views/contatos/Contatos.vue";
import ContatosHome from "./views/contatos/ContatosHome.vue";
import ContatoDetalhes from "./views/contatos/ContatoDetalhes.vue";
import ContatoEditar from "./views/contatos/ContatoEditar.vue";
import Home from "./views/Home.vue";
import Erro404Contatos from "./views/contatos/Erro404Contatos.vue";
import Erro404 from "./views/Erro404.vue";

Vue.use(VueRouter);

const extrairParametroId = (route) => ({
  id: +route.params.id,
});
//ROTAS GENERICAS SEMPRE DEVEM SER COLOCADOS ABAIXO NA LISTA DE CONFIGURAÇÃO
//ROTAS MAIS ESPECÍFICAS SEMPRE ACIMA!!!!
const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      //o que é definido aqui é visto dentro do router-view em Contatos.vue
      path: "/contatos", // meus-contatos/contatos
      component: Contatos,
      alias: ["/meus-contatos", "/lista-de-contatos", "/list-of-contacts"],
      props: (route) => {
        const busca = route.query.busca;
        return busca ? { busca } : {};
      },
      children: [
        {
          path: ":id(\\d+)", // correspondencia dinamica de rota -  meus-contatos/contatos/2
          component: ContatoDetalhes,
          name: "contato",
          props: extrairParametroId,
        },
        {
          //path: ":id(\\d+)/editar/:opcional?", // meus-contatos.com/contatos/2/editar
          //path: ":id(\\d+)/editar/:zeroOuMais*", // meus-contatos.com/contatos/2/editar
          //path: ":id(\\d+)/editar/:umOuMais+", // meus-contatos.com/contatos/2/editar/1
          path: ":id(\\d+)/editar",
          alias: ":id(\\d+)/alterar",
          beforeEnter(to, from, next) {
            //PODE SER CHAMADA DIRETO NA ROTA
            console.log('beforeEnter')
            if(to.query.autenticado === 'true'){
                next()
                return
            }
            next()
          },
          components: {
            default: ContatoEditar,
            "contato-detalhes": ContatoDetalhes,
          },
          props: {
            default: extrairParametroId,
            "contato-detalhes": extrairParametroId,
          },
        },
        { path: "", component: ContatosHome, name: "contatos" }, //rota filha default
        { path: "*", component: Erro404Contatos },
      ],
    },
    { path: "/home", component: Home }, // meus-contatos
    //{  path:'/', redirect: '/contatos' }
    {
      path: "/",
      redirect: () => {
        // return '/contatos'
        return { name: "contatos" };
      },
    },
    {
      path: "*",
      component: Erro404, //rota coringa - a mais genérica que existe (NIVEL GLOBAL)
    },
  ],
});

//global
router.beforeEach((to, from, next) => {
  console.log("BeforeEach");
  next(); //SEMPRE CHAMAR O NEXT PRA NAO TER PROBLEMA
});

//global
//EXECUTADO DEPOIS QUE A NAVEGACAO EH CONFIRMADA
router.afterEach(() => {
  console.log("afterEach");
});

export default router;
