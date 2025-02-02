<template>
  <ion-page>
    <!-- Encabezado -->
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="Atrás"></ion-back-button>
        </ion-buttons>
        <ion-title>Historial Médico</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Contenido -->
    <ion-content>
      <form>
        <!-- Mascota -->
        <ion-item>
          <ion-label position="stacked">Mascota</ion-label>
          <ion-input
            placeholder="Introduce el nombre de la mascota"
            aria-label="Nombre de la mascota"
          ></ion-input>
        </ion-item>

        <!-- Intervención -->
        <ion-item>
          <ion-label position="stacked">Intervención</ion-label>
          <ion-input
            placeholder="Describe la intervención realizada"
            aria-label="Descripción de la intervención"
          ></ion-input>
        </ion-item>

        <!-- Fecha -->
        <ion-item>
          <ion-label position="stacked">Fecha</ion-label>
          <ion-input type="date" aria-label="Fecha de la intervención"></ion-input>
          <ion-input type="time" aria-label="Fecha de la intervención"></ion-input>
        </ion-item>

        <!-- Ubicación -->
        <ion-item>
          <ion-label position="stacked">Ubicación</ion-label>
          <ion-input
            placeholder="Selecciona la ubicación"
            readonly
            aria-label="Ubicación del servicio"
            v-model="ubicacion"
          ></ion-input>
          <ion-button
            slot="end"
            color="primary"
            @click="openMap"
            aria-label="Seleccionar ubicación"
          >
            Seleccionar
          </ion-button>
        </ion-item>

        <!-- Archivo Adjunto -->
        <ion-item>
          <ion-label position="stacked">Archivo Adjunto</ion-label>
          <ion-input
            type="file"
            accept="application/pdf, image/*"
            aria-label="Subir archivo adjunto"
          ></ion-input>
        </ion-item>

        <!-- Botones -->
        <div class="buttons-container">
          <ion-button
            color="primary"
            expand="block"
            router-link="/petcaremanager/historialmedico/"
            aria-label="Guardar historial médico"
          >
            Guardar
          </ion-button>
          <ion-button
            color="danger"
            expand="block"
            router-link="/petcaremanager/historialmedico/"
            aria-label="Eliminar historial médico"
          >
            Eliminar
          </ion-button>
        </div>
      </form>
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
import { ref } from "vue";

// Variable reactiva para la ubicación
const ubicacion = ref("");

// Función para abrir Google Maps con la ubicación
const openMap = () => {
  // Si la ubicación es texto (dirección)
  const mapaUrl = `https://www.google.com/maps?q=${encodeURIComponent(ubicacion.value)}`;
  
  // Si la ubicación es en coordenadas (por ejemplo, latitud, longitud)
  // const mapaUrl = "https://www.google.com/maps?q=40.7128,-74.0060"; // Nueva York

  window.open(mapaUrl, "_blank");
};
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

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
