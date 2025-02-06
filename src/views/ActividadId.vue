<template>
  <ion-page>
    <!-- Encabezado -->
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="Atrás"></ion-back-button>
        </ion-buttons>
        <ion-title>Editar Actividad</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Contenido -->
    <ion-content v-if="actividad">
      <ion-item>
        <ion-label position="stacked">Mascota</ion-label>
        <ion-input v-model="actividad.mascota"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Actividad</ion-label>
        <ion-input v-model="actividad.name"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Fecha</ion-label>
        <ion-input type="date" v-model="actividad.fecha"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Hora</ion-label>
        <ion-input type="time" v-model="actividad.hora"></ion-input>
      </ion-item>

      <!-- Botones -->
      <div class="buttons-container">
        <ion-button color="primary" expand="block" router-link="/petcaremanager/actividad">Guardar</ion-button>
        <ion-button color="danger" expand="block" router-link="/petcaremanager/actividad">Eliminar</ion-button>
      </div>
    </ion-content>

    <ion-content v-else>
      <p>Actividad no encontrada</p>
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
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

// Obtener el parámetro de la URL
const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);

// Array de actividades
const actividad = ref([
  { id: 1, name: 'Paseo', mascota: 'Valkyria', fecha: '2024-01-18', hora: '11:30' },
  { id: 2, name: 'Comida', mascota: 'Valkyria', fecha: '2024-01-18', hora: '11:30' },
  { id: 3, name: 'Comida', mascota: 'Lua', fecha: '2024-01-18', hora: '11:30' }
]).value.find(act => act.id === id);
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
