<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Evento</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-button router-link="/tabs/tab4/secundaria">Añadir Evento</ion-button>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
</script>


<style>
  ion-content{ text-align: center; }
  ion-button{ margin-top:50px }
</style>