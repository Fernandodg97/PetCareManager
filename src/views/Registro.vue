<template>
  <ion-page class="content-container">
    <!-- Encabezado -->
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text="Atrás"></ion-back-button>
        </ion-buttons>
        <ion-title>Registro</ion-title>
      </ion-toolbar>
    </ion-header>
  
    <!-- Contenido -->
    <ion-content>
      <!-- Usuario -->
      <ion-item>
        <ion-label position="stacked" class="custom-label">Usuario</ion-label>
        <ion-input
          placeholder="Usuario"
          class="custom-input"
          aria-label="Usuario"
          required
        ></ion-input>
      </ion-item>
  
      <!-- Contraseña -->
      <ion-item>
        <ion-label position="stacked" class="custom-label">Contraseña</ion-label>
        <ion-input
          type="password"
          placeholder="Contraseña"
          aria-label="Contraseña"
          required
          class="custom-input"
        ></ion-input>
      </ion-item>

      <!-- Confirmar Contraseña -->
      <ion-item>
        <ion-label position="stacked" class="custom-label">Confirmar Contraseña</ion-label>
        <ion-input
          type="password"
          placeholder="Confirmar Contraseña"
          aria-label="Confirmar Contraseña"
          required
          class="custom-input"
        ></ion-input>
      </ion-item>

      <!-- Email -->
      <ion-item>
        <ion-label position="stacked" class="custom-label">Email</ion-label>
        <ion-input
          type="email"
          placeholder="Email"
          aria-label="Email"
          required
          class="custom-input"
        ></ion-input>
      </ion-item>
  
      <!-- Botones -->
      <div class="buttons-container">
        <ion-button
          color="primary"
          expand="block"
          router-link="/petcaremanager/login"
          aria-label="Registrarse"
        >
          Registrarse
        </ion-button>
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
  flex-direction: column;
  gap: 10px;
}

ion-button {
  margin-top: 20px;
}
</style>
