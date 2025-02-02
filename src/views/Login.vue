<template>
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
          <ion-label position="stacked">Usuario</ion-label>
          <ion-input placeholder="Introduce el nombre de usuario"></ion-input>
        </ion-item>
  
        <!-- Contraseña -->
        <ion-item>
          <ion-label position="stacked">Contraseña</ion-label>
          <ion-input type="password" placeholder="Contraseña" aria-label="Contraseña"
            required></ion-input>
        </ion-item>
  
        <!-- Botones -->
        <div class="buttons-container">
          <ion-button color="primary" expand="block" router-link="/petcaremanager/home">Iniciar Sesion</ion-button>
          <ion-button color="primary" expand="block" router-link="/petcaremanager/login/registro">Registrarse</ion-button>
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
  
  .buttons-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  </style>
  