<template>
  <ion-page>
    <!-- Encabezado -->
    <Encabezado :btn="true" />

    <!-- Contenido -->
    <ion-content v-if="actividad">

      <div class="content-container">
        <ion-title class="add-pet-title">Editar Actividad</ion-title>
        <ion-item>
          <ion-label position="stacked" class="custom-label">Mascota</ion-label>
          <ion-input v-model="actividad.mascota" class="custom-input"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked" class="custom-label">Actividad</ion-label>
          <ion-input v-model="actividad.name" class="custom-input"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked" class="custom-label">Fecha</ion-label>
          <ion-input type="date" v-model="actividad.fecha" class="custom-input"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked" class="custom-label">Hora</ion-label>
          <ion-input type="time" v-model="actividad.hora" class="custom-input"></ion-input>
        </ion-item>

        <!-- Botones -->
        <div class="buttons-container">
          <ion-button color="primary" expand="block" @click="guardarActividad">Guardar</ion-button>
          <ion-button color="danger" expand="block" @click="confirmarEliminar">Eliminar</ion-button>
        </div>
      </div>
    </ion-content>

    <ion-content v-else>
      <p>Actividad no encontrada</p>
    </ion-content>
    
    <!-- Alerta de confirmación -->
    <ion-alert 
      :is-open="showAlert" 
      header="Confirmar eliminación"
      message="¿Estás seguro de que deseas eliminar esta actividad?" 
      :buttons="[
        { text: 'Cancelar', role: 'cancel', handler: () => showAlert = false },
        { text: 'Eliminar', handler: eliminarMascota }
      ]" 
    />
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonTitle,
  IonContent,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/vue";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

import Encabezado from '@/components/Encabezado.vue';

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

// Estado del popup de confirmación
const showAlert = ref(false);

const confirmarEliminar = () => {
  showAlert.value = true;
};

const eliminarMascota = () => {
  showAlert.value = false; // Cerrar la alerta antes de redirigir
  router.push("/petcaremanager/actividad"); // Redirigir después de eliminar
};

const guardarActividad = () => {
  // Lógica para guardar la actividad
  router.push("/petcaremanager/actividad"); // Redirigir después de guardar
};
</script>

<style scoped>
.content-container {
  margin: 0 16px;
  /* Margen lateral */
}

.custom-label {
  color: #A0A0A0;
  /* Texto gris clarito para los labels */
}

.custom-input {
  border-bottom: 2px solid #809fff;
  /* Línea azul debajo del input */
  padding-bottom: 4px;
}

.buttons-container {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  /* Botones alineados uno al lado del otro */
}

.buttons-container ion-button {
  flex: 1;
  margin: 0 5px;
}

.add-pet-title {
  text-align: center;
  font-size: 24px;
  /* Tamaño de fuente adecuado */
  font-weight: bold;
  /* Negrita para mayor énfasis */
  color: #1a1a1a;
  /* Color del texto */
  margin-top: 20px;
  /* Espaciado superior */
  margin-bottom: 20px;
  /* Espaciado inferior */
}

/* Estilos para PC o pantallas grandes (más de 992px) */
@media (min-width: 993px) {

  .content-container {
    padding-right: 20%;
  }
}
</style>
