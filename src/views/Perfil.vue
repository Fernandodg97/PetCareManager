<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Perfil</ion-title>
      </ion-toolbar>
    </ion-header>
    <!-- Contenido -->
    <ion-content>
      <form>
        <!-- Foto -->
        
        <!-- Cambiar -->

        <!-- Nombre -->
        <ion-item>
          <ion-label position="stacked">Nombre</ion-label>
          <ion-input placeholder="Introduce el nombre" aria-label="Nombre"></ion-input>
        </ion-item>

        <!-- Apellido -->
        <ion-item>
          <ion-label position="stacked">Apellido</ion-label>
          <ion-input placeholder="Introduce el apellido" aria-label="Apellido"></ion-input>
        </ion-item>

        <!-- Edad -->
        <ion-item>
          <ion-label position="stacked">Edad</ion-label>
          <ion-input type="date" aria-label="Edad"></ion-input>
        </ion-item>

        <!-- Email -->
        <ion-item>
          <ion-label position="stacked">Email</ion-label>
          <ion-input v-model="email" placeholder="Introduce el email" aria-label="Email" type="email"
            required></ion-input>
        </ion-item>

        <!-- Teléfono -->
        <ion-item>
          <ion-label position="stacked">Teléfono</ion-label>
          <ion-input v-model="telefono" placeholder="Introduce el teléfono" aria-label="Teléfono" type="tel"
            pattern="^[0-9]{9}$" required>
          </ion-input>
        </ion-item>

        <!-- Botones -->
        <div class="buttons-container">
          <ion-button color="primary" expand="block" router-link="/tabs/tab5/secundaria"
            aria-label="Cambiar contraseña">
            Cambiar contraseña
          </ion-button>
          <ion-button color="primary" expand="block" router-link="/tabs/tab5" aria-label="Guardar cambios">
            Guardar
          </ion-button>
        </div>
      </form>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
</script>


<style>
ion-content {
  text-align: center;
}

ion-button {
  margin-top: 50px
}
</style>