<template>
  <ion-page>
    <!-- Encabezado -->
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="Atrás"></ion-back-button>
        </ion-buttons>
        <ion-title>Actividad</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Contenido -->
    <ion-content>
      <!-- Mascota -->
      <ion-item>
        <ion-label position="stacked">Mascota</ion-label>
        <ion-input placeholder="Introduce el nombre de la mascota"></ion-input>
      </ion-item>

      <!-- Actividad -->
      <ion-item>
        <ion-label position="stacked">Actividad</ion-label>
        <ion-input placeholder="Introduce la actividad"></ion-input>
      </ion-item>

      <!-- Fecha -->
      <ion-item>
        <ion-label position="stacked">Fecha</ion-label>
        <ion-input type="date"></ion-input>
      </ion-item>

      <!-- Hora -->
      <ion-item>
        <ion-label position="stacked">Hora</ion-label>
        <ion-input type="time"></ion-input>
      </ion-item>

      <!-- Botones -->
      <div class="buttons-container">
        <ion-button color="primary" expand="block" router-link="/petcaremanager/actividad">Guardar</ion-button>
        <ion-button color="danger" expand="block" router-link="/petcaremanager/actividad">Eliminar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonButtons,
  IonBackButton,
} from "@ionic/vue";
</script>

<style scoped>
ion-content {
  padding: 16px;
}

.buttons-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
