<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <!-- <ion-tab-bar slot="bottom" class="custom-tab-bar-pc"> css utilitis: https://ionicframework.com/docs/layout/css-utilities#element-display-->
      <!-- Hacer que al pasar la vista a pc el menu bar se oculte y se vea el de pc clase .ion-hide -->
       
      <ion-tab-bar slot="bottom" class="custom-tab-bar">
        <ion-tab-button tab="actividad" href="/petcaremanager/actividad">
          <img src="../assets/new_releases.png" alt="Actividad" class="image" />
          <ion-label>Actividad</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="historialmedico" href="/petcaremanager/historialmedico">
          <img src="../assets/add_box.png" alt="Historial Medico" class="image" />
          <ion-label>Historial</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="home" href="/petcaremanager/home">
          <img src="../assets/home.png" alt="Home" class="image" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="eventos" href="/petcaremanager/eventos">
          <img src="../assets/event.png" alt="Eventos" class="image" />
          <ion-label>Eventos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="perfil" href="/petcaremanager/perfil">
          <!-- Foto redonda en lugar de icono -->
          <img src="../assets/f1.png" alt="Foto de perfil" class="image profile" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>

      <!-- Renderiza las rutas de las páginas dentro de los tabs -->
      <ion-router-outlet />

    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>

<style scoped>
/* Estilo para el fondo del tab-bar */
.custom-tab-bar {
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.2);
  background-color: #809fff;
}
ion-tab-button{
  background-color: #809fff;
}

/* Estilo para ocultar los labels */
ion-tab-button ion-label {
  display: none;
}

/* Estilo para la imagen redonda en el tab de perfil */
.image {
  width: 48px; /* Puedes ajustar el tamaño */
  height: 48px; /* Asegúrate de que el alto y ancho sean iguales */
  border-radius: 50%; /* Esto hace que la imagen sea redonda */
  object-fit: cover; /* Para que la imagen se recorte correctamente si es necesario */
}
.profile{
  width: 44px; /* Puedes ajustar el tamaño */
  height: 44px;
}
</style>
