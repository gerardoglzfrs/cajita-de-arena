import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {   
        path: '/',
        name: 'login',
        component: () => import('../views/Login.vue'),
        meta: {
            requireAuth: false,
        }
    },

    {   
        path: '/verificar/:token',
        name: 'verificar',
        component: () => import('../views/Password/Verificar.vue'),
        meta: {
            requireAuth: false,
        }
    },

    {   
        path: '/restablecer/:token',
        name: 'restablecer',
        component: () => import('../views/Password/Restablecer.vue'),
        meta: {
            requireAuth: false,
        }
    },

    /* Ruta de prueba */
    {   
        path: '/verificar2/:token',
        name: 'verificar2',
        component: () => import('../views/Password/Verificar2.vue'),
        meta: {
            requireAuth: false,
        }
    },

    {   
        path: '/restablecer2/:token',
        name: 'restablecer2',
        component: () => import('../views/Password/Restablecer2.vue'),
        meta: {
            requireAuth: false,
        }
    },
    /* Termina ruta de prueba */

    {   
        path: '/login',
        name: 'login2',
        component: () => import('../views/Login2.vue'),
        meta: {
            requireAuth: false,
        }
    },

    {
        path: '/main',
        name: 'main',
        component: () => import('../views/Main.vue'),
        /* meta: {
            requireAuth: true,
        }, */
    },

    {
        path: '/especialidades',
        name: 'especialidades',
        component: () => import('../views/Paciente/Especialidades.vue'),
        meta: {
            requireAuth: true,
        },
    },

    {
        path: '/pacientes/:id',
        name: 'pacientes',
        component: () => import('../views/Paciente/Pacientes.vue'),
        meta: {
            requireAuth: true,
        },
    },

    {
        path: '/registro',
        name: 'registro',
        component: () => import('../views/Paciente/Registro/Main.vue'),
        meta: {
            requireAuth: true,
        },
    },

    {
        path: '/perfil',
        name: 'perfil',
        component: () => import('../views/Usuario/Perfil.vue'),
        meta: {
            requireAuth: true,
        },
    },

    {
        path: '/mis_pacientes',
        name: 'mis_pacientes',
        component: () => import('../views/Usuario/MisPacientes.vue'),
        meta: {
            requireAuth: true,
        },
    },

    {
        path: '/administrador',
        name: 'administrador',
        component: () => import('../views/Usuario/Admin/Administrador.vue'),
        meta: {
            requireAuth: false,
        },
    },
    
    {
        path: '*',
        redirect: '/main',
        meta: {
            requireAuth: true,
        },
    },

    {
        path: '*',
        redirect: '/',
    },

]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const protectedRoute = to.matched.some(record => record.meta.requireAuth)
    if (protectedRoute && localStorage.token === undefined) {
        next({ name: 'login' })
    } 
    else{
        next()
    }
});

export default router;

