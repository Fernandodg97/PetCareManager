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
      <div class="logo">
          <img
              src="../assets/logo.png"
              alt="Foto de perfil"
              class="profile-photo"
            />
          <h1>Pet Care Manager</h1>
        </div>
        <div class="contenedor">
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

.logo{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  margin-top: 40px;
}
.profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 20px;
  margin-bottom: 10px;
}

.contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #809fff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 80%;
  padding: 16px;
  margin: 10px auto; /* Centrar el contenedor */
}

ion-item{
  border-radius: 20px;
  display: non;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
}

.custom-label {
  display: none;
  color: #A0A0A0; /* Texto gris clarito para los labels */
}

.buttons-container {
  margin-top: 20px;
  display: flex;
  justify-content: center; /* Botones centrados */
}

ion-button {
  margin-top: 20px;
}
</style>
