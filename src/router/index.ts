import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/petcaremanager/login'
  },
  {
    path: '/petcaremanager/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/petcaremanager/login/registro',
    component: () => import('@/views/Registro.vue')
  },
  {
    path: '/petcaremanager/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: 'home' // Redirigir a home dentro de los tabs
      },
      // Notificaciones
      {
        path: 'notificaciones',
        component: () => import('@/views/Notificaciones.vue')
      },
      // Actividad
      {
        path: 'actividad',
        component: () => import('@/views/Actividad.vue')
      },
      {
        path: 'actividad/actividadadd',
        component: () => import('@/views/ActividadAdd.vue')
      },
      {
        path: 'actividad/:id',
        component: () => import('@/views/ActividadId.vue')
      },
      // Historial Médico
      {
        path: 'historialmedico',
        component: () => import('@/views/HistorialMedico.vue')
      },
      {
        path: 'historialmedico/historialmedicoadd',
        component: () => import('@/views/HistorialMedicoAdd.vue')
      },
      {
        path: 'historialmedico/:id',
        component: () => import('@/views/HistorialMedicoId.vue')
      },
      // Home
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'home/mascotaadd',
        component: () => import('@/views/MascotaAdd.vue')
      },
      {
        path: 'home/:id',
        component: () => import('@/views/MascotaId.vue')
      },
      {
        path: 'home/:id/cambiarfotomascota',
        component: () => import('@/views/CambiarFotoMascota.vue')
      },
      // Eventos
      {
        path: 'eventos',
        component: () => import('@/views/Eventos.vue')
      },
      {
        path: 'eventos/eventosadd',
        component: () => import('@/views/EventosAdd.vue')
      },
      {
        path: 'eventos/:id',
        component: () => import('@/views/EventosId.vue')
      },
      // Perfil
      {
        path: 'perfil',
        component: () => import('@/views/Perfil.vue')
      },
      {
        path: 'perfil/cambiarcontrasena',
        component: () => import('@/views/CambiarContraseña.vue')
      }
      ,
      {
        path: 'perfil/cambiarfotoperfil',
        component: () => import('@/views/CambiarFotoPerfil.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
