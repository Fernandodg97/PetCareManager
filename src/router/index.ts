import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/petcaremanager/login'
  },
  { 
    path: '/petcaremanager/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: 'login',
      },
      {
        path: 'login',
        component: () => import('@/views/Login.vue')
      },
      {
        path: 'login/registro',
        component: () => import('@/views/Registro.vue'),
      },
      // Actividad
      {
        path: 'actividad',
        component: () => import('@/views/Actividad.vue')
      },
      {
        path: 'actividad/actividadadd',
        component: () => import('@/views/ActividadAdd.vue'),
      },
      {
        path: '/actividad/:id',
        component: () => import('@/views/ActividadId.vue'),
      },
      // Historial Medico
      {
        path: 'historialmedico',
        component: () => import('@/views/HistorialMedico.vue')
      },
      {
        path: 'historialmedico/historialmedicoadd',
        component: () => import('@/views/HistorialMedicoAdd.vue'),
      },
      {
        path: '/historialmedico/:id',
        component: () => import('@/views/HistorialMedicoId.vue'),
      },
      // Home
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'home/secundaria',
        component: () => import('@/views/HomeSecundaria.vue'),
      },
      // Eventos
      {
        path: 'eventos',
        component: () => import('@/views/Eventos.vue')
      },
      {
        path: 'eventos/eventosadd',
        component: () => import('@/views/EventosAdd.vue'),
      },
      {
        path: '/eventos/:id',
        component: () => import('@/views/EventosId.vue'),
      },
      //Perfil
      {
        path: 'perfil',
        component: () => import('@/views/Perfil.vue')
      },
      {
        path: 'perfil/cambiarcontraseña',
        component: () => import('@/views/CambiarContraseña.vue'),
      }
    ]
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router