<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="actividad" href="/petcaremanager/actividad">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Actividad</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="historialmedico" href="/petcaremanager/historialmedico">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Historial</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="home" href="/petcaremanager/home">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="eventos" href="/petcaremanager/eventos">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Eventos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="perfil" href="/petcaremanager/perfil">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
      
      <!-- Renderiza las rutas de las páginas dentro de los tabs -->
      <ion-router-outlet />
      
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
