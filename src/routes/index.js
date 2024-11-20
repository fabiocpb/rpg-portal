import { createRouter, createWebHistory, RouterLink } from 'vue-router'
import painel from '../views/painel/painel.vue'
import perfil from '../views/perfil/perfil-view.vue'
import perfilPublico from '../views/perfil/perfil-publico.vue'
import configuracoes from '../views/configuracoes/configuracoes.vue'
import login from '../views/login/login.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/home/',
            props: true,
            component: painel,
            children: [
                {
                    path: 'perfil',
                    props: true,
                    component: perfil
                },
                {
                    path: 'configuracoes',
                    props: true,
                    component: configuracoes
                },
              ]
        },
        {
            path: '/perfil-publico/',
            props: true,
            component: painel,
            children: [
                {
                    path: 'perfil/:id',
                    props: true,
                    component: perfilPublico
                }
              ]
        },
      
    ]
})

export default router;