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
      <div class="content-container">
        <!-- Mascota -->
        <ion-item>
          <ion-label position="stacked" class="custom-label">Mascota</ion-label>
          <ion-input placeholder="Introduce el nombre de la mascota" class="custom-input"></ion-input>
        </ion-item>

        <!-- Actividad -->
        <ion-item>
          <ion-label position="stacked" class="custom-label">Actividad</ion-label>
          <ion-input placeholder="Introduce la actividad" class="custom-input"></ion-input>
        </ion-item>

        <!-- Fecha -->
        <ion-item>
          <ion-label position="stacked" class="custom-label">Fecha</ion-label>
          <ion-input type="date" class="custom-input"></ion-input>
        </ion-item>

        <!-- Hora -->
        <ion-item>
          <ion-label position="stacked" class="custom-label">Hora</ion-label>
          <ion-input type="time" class="custom-input"></ion-input>
        </ion-item>

        <!-- Botones -->
        <div class="buttons-container">
          <ion-button color="primary" expand="block" router-link="/petcaremanager/actividad">Añadir</ion-button>
        </div>
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
.content-container {
  margin: 0 16px; /* Margen lateral */
}

.custom-label {
  color: #A0A0A0; /* Texto gris clarito para los labels */
}

.custom-input {
  border-bottom: 2px solid #809fff; /* Línea azul debajo del input */
  padding-bottom: 4px;
}

.buttons-container {
  margin-top: 20px;
  display: flex;
  justify-content: center; /* Centrado del botón */
}

ion-button {
  flex: 1;
  margin: 0 5px;
}
</style>
