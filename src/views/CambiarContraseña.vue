<template>
  <ion-page>
    <!-- Encabezado -->
    <Encabezado :btn="true"/>

    <!-- Contenido -->
    <ion-content>
      
      <div class="content-container">
        <ion-title  class="add-pet-title">Editar Contraseña</ion-title>
        <form>
          <!-- Contraseña Actual -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Contraseña Actual</ion-label>
            <ion-input
              v-model="currentPassword"
              type="password"
              placeholder="************"
              aria-label="Contraseña actual"
              required
              class="custom-input"
            ></ion-input>
          </ion-item>

          <!-- Nueva Contraseña -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Nueva Contraseña</ion-label>
            <ion-input
              v-model="newPassword"
              type="password"
              placeholder="************"
              aria-label="Nueva contraseña"
              required
              class="custom-input"
            ></ion-input>
          </ion-item>

          <!-- Repetir Nueva Contraseña -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Repetir Nueva Contraseña</ion-label>
            <ion-input
              v-model="confirmPassword"
              type="password"
              placeholder="************"
              aria-label="Repetir nueva contraseña"
              required
              class="custom-input"
            ></ion-input>
          </ion-item>

          <!-- Botones -->
          <div class="buttons-container">
            <ion-button
              color="primary"
              expand="block"
              router-link="/petcaremanager/perfil"
              aria-label="Cambiar contraseña"
            >
              Cambiar contraseña
            </ion-button>
          </div>
        </form>
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
import { ref } from "vue";
import Encabezado from '@/components/Encabezado.vue';
// Variables reactivas para las contraseñas
const currentPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");
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

ion-button {
  margin-top: 20px;
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
