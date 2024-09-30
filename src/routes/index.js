import { createRouter, createWebHistory, RouterLink } from 'vue-router'
import painel from '../views/painel/painel.vue'
import perfil from '../views/perfil/perfil-view.vue'
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
            path: '/home/:id',
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
        }
      
    ]
})

export default router;