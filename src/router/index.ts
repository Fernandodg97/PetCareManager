import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/petcaremanager/home'
  },
  { 
    path: '/petcaremanager/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: 'home',
      },
      {
        path: 'actividad',
        component: () => import('@/views/Actividad.vue')
      },
      {
        path: 'actividad/actividadadd',
        component: () => import('@/views/ActividadAdd.vue'),
      },
      // {
      //   path: 'tab1/secundaria2',
      //   component: () => import('@/views/ActividadAdd.vue'),
      // },
      {
        path: 'historialmedico',
        component: () => import('@/views/HistorialMedico.vue')
      },
      {
        path: 'historialmedico/historialmedicoadd',
        component: () => import('@/views/HistorialMedicoAdd.vue'),
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'home/secundaria',
        component: () => import('@/views/HomeSecundaria.vue'),
      },
      {
        path: 'eventos',
        component: () => import('@/views/Eventos.vue')
      },
      {
        path: 'eventos/eventosadd',
        component: () => import('@/views/EventosAdd.vue'),
      },
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