<template>
  <ion-page>
    <!-- Encabezado -->
    <Encabezado :btn="true"/>

    <!-- Contenido -->
    <ion-content>
      
      <form>
        <div class="content-container">
          <ion-title class="add-pet-title">Evento</ion-title>
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
            <ion-label position="stacked" class="custom-label">Evento</ion-label>
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
            <ion-label position="stacked" class="custom-label">Hora</ion-label>
            <ion-input type="time" aria-label="Hora de la intervención" class="custom-input"></ion-input>
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

          <!-- Recordatorio -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Recordatorio</ion-label>
            <ion-input type="date" aria-label="Fecha de la intervención" class="custom-input"></ion-input>
            <ion-label position="stacked" class="custom-label">Hora</ion-label>
            <ion-input type="time" aria-label="Hora de la intervención" class="custom-input"></ion-input>
          </ion-item>

          <!-- Botones -->
          <div class="buttons-container">
            <ion-button color="primary" expand="block" router-link="/petcaremanager/eventos/">Guardar</ion-button>
            <ion-button color="danger" expand="block" router-link="/petcaremanager/eventos/">Eliminar</ion-button>
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
  justify-content: space-between; /* Botones alineados uno al lado del otro */
}

.buttons-container ion-button {
  flex: 1;
  margin: 0 5px; /* Espaciado entre los botones */
}
.add-pet-title {
    text-align: center;
    font-size: 24px; /* Tamaño de fuente adecuado */
    font-weight: bold; /* Negrita para mayor énfasis */
    color: #1a1a1a; /* Color del texto */
    margin-top: 20px; /* Espaciado superior */
    margin-bottom: 20px; /* Espaciado inferior */
}
/* Estilos para PC o pantallas grandes (más de 992px) */
@media (min-width: 993px) {

.content-container {
padding-right: 20%;
}
}
</style>
