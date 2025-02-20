<template>
  <ion-page>
    <!-- Encabezado -->
    <Encabezado :btn="true"/>

    <!-- Contenido -->
    <ion-content>
      <ion-title>Historial Médico</ion-title>
      <form>
        <div class="content-container">
          <!-- Mascota -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Mascota</ion-label>
            <ion-input
              placeholder="Introduce el nombre de la mascota"
              aria-label="Nombre de la mascota"
              class="custom-input"
            ></ion-input>
          </ion-item>

          <!-- Intervención -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Intervención</ion-label>
            <ion-input
              placeholder="Describe la intervención realizada"
              aria-label="Descripción de la intervención"
              class="custom-input"
            ></ion-input>
          </ion-item>

          <!-- Fecha -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Fecha</ion-label>
            <ion-input type="date" aria-label="Fecha de la intervención" class="custom-input"></ion-input>
            <ion-input type="time" aria-label="Fecha de la intervención" class="custom-input"></ion-input>
          </ion-item>

          <!-- Ubicación -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Ubicación</ion-label>
            <ion-input
              placeholder="Selecciona la ubicación"
              readonly
              aria-label="Ubicación del servicio"
              v-model="ubicacion"
              class="custom-input"
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
            <ion-label position="stacked" class="custom-label">Archivo Adjunto</ion-label>
            <ion-input
              type="file"
              accept="application/pdf, image/*"
              aria-label="Subir archivo adjunto"
              class="custom-input"
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
              Añadir
            </ion-button>
          </div>
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
import Encabezado from '@/components/Encabezado.vue';
// Variable reactiva para la ubicación
const ubicacion = ref("");

// Función para abrir Google Maps con la ubicación
const openMap = () => {
  const mapaUrl = `https://www.google.com/maps?q=${encodeURIComponent(ubicacion.value)}`;
  window.open(mapaUrl, "_blank");
};
</script>

<style scoped>
ion-content {
  padding: 16px;
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
  justify-content: center; /* Centrar los botones */
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
