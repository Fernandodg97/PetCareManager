<template>
  <div class="content-container">
    <ion-page>
      <!-- Encabezado -->
      <ion-header>
        <ion-toolbar>
          <ion-title>Login</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <!-- Contenido -->
      <ion-content>
        <!-- Usuario -->
        <ion-item>
          <ion-label position="stacked" class="custom-label">Usuario</ion-label>
          <ion-input
            placeholder="Introduce el nombre de usuario"
            class="custom-input"
            aria-label="Nombre de usuario"
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
  
        <!-- Botones -->
        <div class="buttons-container">
          <ion-button
            color="primary"
            expand="block"
            router-link="/petcaremanager/home"
            aria-label="Iniciar sesión"
          >
            Iniciar Sesión
          </ion-button>
          <ion-button
            color="primary"
            expand="block"
            router-link="/petcaremanager/login/registro"
            aria-label="Registrarse"
          >
            Registrarse
          </ion-button>
        </div>
      </ion-content>

    </ion-page>
  </div>
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
  IonInput
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
