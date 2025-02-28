<template>
  <ion-header class="custom-header">
    <ion-toolbar>
      <!-- Botón de "Atrás" alineado a la izquierda -->
      <ion-buttons class="btn" v-if="btn" slot="start">
        <ion-back-button text=""></ion-back-button>
      </ion-buttons>

      <!-- Contenedor para centrar el contenido -->
      <div class="header-content">
        <img src="../assets/logo.png" alt="Notificaciones" class="logo" />
        <ion-title>Pet Care Manager</ion-title>
        <!-- Botón de notificaciones alineado a la derecha -->
        <ion-buttons slot="end">
          <ion-button router-link="/petcaremanager/notificaciones">
            <img src="../assets/notifications.png" alt="Notificaciones" class="profile-image" />
          </ion-button>
        </ion-buttons>
      </div>
      <div class="header-pc ion-hide-xl-down">

        <div class="perfil">
          <router-link to="/petcaremanager/perfil" class="nav-item" active-class="active">
          <img src="../assets/f1.png" alt="Foto de perfil" />
            <span>Perfil</span>
          </router-link>
        <h1>Notificaciones</h1>
        </div>

        <div class="notItem">
          <ion-list v-if="notificaciones.length > 0">
            <NotificationItem v-for="noti in notificaciones" :key="noti.id" :id="noti.id" :titulo="noti.titulo"
              :mensaje="noti.mensaje" :leida="noti.leida" @notificacionLeida="marcarNotificacionLeida" />
          </ion-list>
          <p v-else>No hay notificaciones disponibles.</p>
        </div>
      </div>

    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton } from '@ionic/vue';
import { defineProps } from 'vue';
import { Navigation, Pagination } from "swiper/modules";
import { ref } from 'vue';
import NotificationItem from '@/components/NotificationItem.vue';

const notificaciones = ref([
  { id: 1, titulo: "Recordatorio", mensaje: "Mañana tienes una cita con el Peluquero", leida: false },
  { id: 2, titulo: "Recordatorio", mensaje: "Mañana tienes una cita con el veterinario", leida: false },
  { id: 3, titulo: "Alerta de comida", mensaje: "Hora de alimentar a Luna 🐶", leida: false },
  { id: 4, titulo: "Paseo pendiente", mensaje: "No olvides sacar a Max a su paseo diario 🐕", leida: true },
  { id: 5, titulo: "Vacunación", mensaje: "Recuerda que el refuerzo de vacunas de Tom está próximo 📅", leida: true },
  { id: 7, titulo: "Revisión médica", mensaje: "Hoy es el chequeo de salud anual de Nala 🏥", leida: true },
]);

const marcarNotificacionLeida = (id: number) => {
  const notificacion = notificaciones.value.find(noti => noti.id === id);
  if (notificacion) notificacion.leida = true;
};

defineProps<{
  btn?: boolean;
}>();
</script>

<style scoped>
ion-title {
  color: #000000;
  /* font-size: 18px;
  font-weight: bold; */
}

ion-toolbar {
  --background: #809fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 10px;
  margin: 0 auto;
  /* Centrar contenido */
}

/* Estilo del logo */
.logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  /* position: absolute;
  left: 16px */
}

/* Estilo para la imagen redonda en el botón de perfil */
.profile-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

/* Responsive */
.not {
  background: #809fff;
  height: 100vh;
  position: fixed;
  top: 0; 
  right: 0; 
  width: 20%; 
  z-index: 1; 
}

.notItem {
  background-color: #809fff;
}

.notItem ion-list{
  background: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
}


/* Estilos para pantallas menos de 992px */
@media (max-width: 993px) {
  .header-pc {
    display: none;
  }
}

/* Estilos para PC o pantallas grandes (más de 992px) */
@media (min-width: 993px) {
  .header-content, .btn {
    display: none;
  }
  ion-toolbar {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background-color: #809fff;
  padding: 20px;
  flex-direction: column;
  }
  .perfil{
    margin-top: 20px;
  }
  .perfil h1{
    color: white;
    margin-top: 20px;
  }
  .perfil img{
    width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  }
  .nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-item.active {
  color: black;
  font-weight: bold;
}

}
</style>
