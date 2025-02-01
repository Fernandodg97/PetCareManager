<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="actividad" href="/petcaremanager/actividad">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Actividad</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/petcaremanager/tab2">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Historial</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="home" href="/petcaremanager/home">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/petcaremanager/tab4">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Eventos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab5" href="/petcaremanager/tab5">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
