<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Evento</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <!-- Navegación con parámetros -->
        <ion-item
          v-for="item in items"
          :key="item.id"
          :router-link="`/eventos/${item.id}`"
          detail
        >
          {{ item.name }}
        </ion-item>
      </ion-list>
      <ion-button router-link="/petcaremanager/eventos/eventosadd">Añadir Evento</ion-button>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonList } from '@ionic/vue';
import { useRouter } from 'vue-router';
const items = [
  { id:1, name: 'Evento 1' },
  { id:2, name: 'Evento 2' },
  { id:3, name: 'Evento 3' }
];
</script>


<style>
  ion-content{ text-align: center; }
  ion-button{ margin-top:50px }
</style>