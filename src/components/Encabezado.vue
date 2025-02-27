<template>
  <ion-header class="custom-header">
    <ion-toolbar>
      <!-- Botón de "Atrás" alineado a la izquierda -->
      <ion-buttons v-if="btn" slot="start">
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
      <div class="header-pc">
        <h1>Notificaciones</h1>
      </div>
      
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton } from '@ionic/vue';
import { defineProps } from 'vue';

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
  margin: 0 auto; /* Centrar contenido */
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
/* Estilos para pantallas menos de 992px */
@media (max-width: 993px) {
  .header-pc{
    display: none;
  }
}
/* Estilos para PC o pantallas grandes (más de 992px) */
@media (min-width: 993px) {
  .header-content{
    display: none;
  }
}
</style>
