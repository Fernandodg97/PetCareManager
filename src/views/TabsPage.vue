<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet />

      <!-- Tab Bar para móviles (oculto en pantallas grandes) -->
      <ion-tab-bar slot="bottom" class="mobile-tab-bar">
        <ion-tab-button tab="actividad" href="/petcaremanager/actividad" active-class="active">
          <ion-icon :icon="paw"></ion-icon>
          <ion-label>Actividad</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="historialmedico" href="/petcaremanager/historialmedico" active-class="active">
          <ion-icon :icon="medical"></ion-icon>
          <ion-label>Historial</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="home" href="/petcaremanager/home" active-class="active">
          <ion-icon :icon="home"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="eventos" href="/petcaremanager/eventos" active-class="active">
          <ion-icon :icon="calendar"></ion-icon>
          <ion-label>Eventos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="perfil" href="/petcaremanager/perfil">
          <img src="../assets/f1.png" alt="Foto de perfil" class="image profile" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>

      <!-- Barra lateral para escritorio (oculta en móviles) -->
      <div class="desktop-sidebar ion-hide-xl-down">
        <div class="header-content">
          <img src="../assets/logo.png" alt="Notificaciones" class="logo" />
          <ion-title>Pet Care Manager</ion-title>
        </div>
        <nav class="nav-menu">
          <router-link to="/petcaremanager/home" class="nav-item" active-class="active">
            <ion-icon :icon="home"></ion-icon>
            <span>Inicio</span>
          </router-link>

          <router-link to="/petcaremanager/eventos" class="nav-item" active-class="active">
            <ion-icon :icon="calendar"></ion-icon>
            <span>Eventos</span>
          </router-link>

          <router-link to="/petcaremanager/historialmedico" class="nav-item" active-class="active">
            <ion-icon :icon="medical"></ion-icon>
            <span>Historial Medico</span>
          </router-link>

          <router-link to="/petcaremanager/actividad" class="nav-item" active-class="active">
            <ion-icon :icon="paw"></ion-icon>
            <span>Actividad</span>
          </router-link>

          <router-link to="/petcaremanager/home/mascotaadd" class="nav-item" active-class="active">
            <ion-icon :icon="add"></ion-icon>
            <span>Añadir Mascota</span>
          </router-link>
        </nav>
      </div>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
  IonTitle
} from '@ionic/vue';

import { home, calendar, medical, paw, add} from 'ionicons/icons';
</script>

<style scoped>
/* Estilo para el fondo del tab-bar */
.mobile-tab-bar {
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.2);
  background-color: #809fff;
}

ion-tab-button {
  background-color: #809fff;
}

/* Estilo para ocultar los labels */
ion-tab-button ion-label {
  display: none;
}

/* Estilos para la barra lateral desktop */
.desktop-sidebar {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  background-color: #809fff;
  padding: 20px;
  flex-direction: column;
}

/* Estilo para la imagen redonda en el tab de perfil */
.image {
  width: 48px;
  /* Puedes ajustar el tamaño */
  height: 48px;
  /* Asegúrate de que el alto y ancho sean iguales */
  border-radius: 50%;
  /* Esto hace que la imagen sea redonda */
  object-fit: cover;
  /* Para que la imagen se recorte correctamente si es necesario */
}

.profile {
  width: 44px;
  /* Puedes ajustar el tamaño */
  height: 44px;
}

.header-content {
  margin: 0 auto; /* Centrar contenido */
}

/* Estilo del logo */
.logo {
  width: 48px;
  height: 48px;
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

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
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

.nav-item ion-icon {
  font-size: 24px;
}

.logout-button {
  margin-top: auto;
  gap: 12px;
  color: white;
  cursor: pointer;
  padding: 10px;
  padding-left: 25%;
  transition: all 0.2s ease;
  border-radius: 8px;
}

.logout-button:hover {
  color: black;
  background: rgba(255, 255, 255, 0.856);
  
}

/* Responsive */
@media (min-width: 769px) {
  .mobile-tab-bar {
    display: none !important;
  }

  .desktop-sidebar {
    display: flex;
  }

  ion-router-outlet {
    margin-left: 240px;
  }

  .header-content {
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
}

.header-content ion-title {
  margin: 0;
  font-size: 18px;
}

  .logo {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}
}
</style>
