<template>
  <ion-page>
    <!-- Encabezado -->
    <Encabezado :btn="true" />
    <!-- Contenido -->
    <ion-content>
      
      <form>
        <div class="content-container">
          <ion-title class="add-pet-title">Añadir Actividad</ion-title>
          <!-- Mascota -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Mascota</ion-label>
            <ion-input placeholder="Introduce el nombre de la mascota" class="custom-input"></ion-input>
          </ion-item>

          <!-- Actividad -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Actividad</ion-label>
            <ion-input placeholder="Introduce la actividad" class="custom-input"></ion-input>
          </ion-item>

          <!-- Fecha -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Fecha</ion-label>
            <ion-input type="date" class="custom-input"></ion-input>
          </ion-item>

          <!-- Hora -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Hora</ion-label>
            <ion-input type="time" class="custom-input"></ion-input>
          </ion-item>

          <!-- Botones -->
          <div class="buttons-container">
            <ion-button color="primary" expand="block" router-link="/petcaremanager/actividad">Añadir</ion-button>
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
import Encabezado from '@/components/Encabezado.vue';
</script>

<style scoped>
.add-pet-title {
    text-align: center;
    font-size: 24px; /* Tamaño de fuente adecuado */
    font-weight: bold; /* Negrita para mayor énfasis */
    color: #1a1a1a; /* Color del texto */
    margin-top: 20px; /* Espaciado superior */
    margin-bottom: 20px; /* Espaciado inferior */
}
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
  justify-content: center; /* Botones centrados */
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
/* Estilos para PC o pantallas grandes (más de 992px) */
@media (min-width: 993px) {

.content-container {
padding-right: 20%;
}
}
</style>
