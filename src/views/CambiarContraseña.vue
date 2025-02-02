<template>
  <ion-page>
    <!-- Encabezado -->
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="Atrás"></ion-back-button>
        </ion-buttons>
        <ion-title>Editar Contraseña</ion-title>
      </ion-toolbar>
    </ion-header>

    <!-- Contenido -->
    <ion-content>
      <form>
        <!-- Contraseña Actual -->
        <ion-item>
          <ion-label position="stacked">Contraseña Actual</ion-label>
          <ion-input v-model="currentPassword" type="password" placeholder="************" aria-label="Contraseña actual"
            required></ion-input>
        </ion-item>

        <!-- Nueva Contraseña -->
        <ion-item>
          <ion-label position="stacked">Nueva Contraseña</ion-label>
          <ion-input v-model="newPassword" type="password" placeholder="************" aria-label="Nueva contraseña"
            required></ion-input>
        </ion-item>

        <!-- Repetir Nueva Contraseña -->
        <ion-item>
          <ion-label position="stacked">Repetir Nueva Contraseña</ion-label>
          <ion-input v-model="confirmPassword" type="password" placeholder="************"
            aria-label="Repetir nueva contraseña" required></ion-input>
        </ion-item>

        <!-- Botones -->
        <div class="buttons-container">
          <ion-button color="primary" expand="block" router-link="/petcaremanager/perfil" aria-label="Cambiar contraseña">
            Cambiar contraseña
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
