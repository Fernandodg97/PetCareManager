<template>
    <ion-header class="custom-header">
      <ion-toolbar>
        <ion-buttons v-if="btn" slot="start">
          <ion-back-button text="Atrás"></ion-back-button>
        </ion-buttons>
        <ion-title>Pet Care Manager</ion-title>
      </ion-toolbar>
    </ion-header>
  </template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/vue';
import { defineProps } from 'vue';

defineProps<{
  btn?: boolean;
}>();
//<Encabezado :btn="true"/> se muetsra el boton
//<Encabezado/> No se muestra
</script>
  
  <style scoped>
  ion-toolbar{
    --background: #809fff;
  }
  </style>
  