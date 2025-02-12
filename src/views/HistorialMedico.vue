<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Historial Medico</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <!-- Navegación con parámetros -->
        <ion-item
          v-for="item in items"
          :key="item.id"
          :router-link="`historialmedico/${item.id}`"
          detail
        >
          {{ item.name }}
        </ion-item>
      </ion-list>
      <ion-button router-link="/petcaremanager/historialmedico/historialmedicoadd">Añadir historial medico</ion-button>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonList } from '@ionic/vue';
import { useRouter } from 'vue-router';
const items = [
  { id:1, name: 'Historial Medico 1' },
  { id:2, name: 'Historial Medico 2' },
  { id:3, name: 'Historial Medico 3' }
];
</script>


<style>
  ion-content{ text-align: center; }
  ion-button{ margin-top:50px }
</style>