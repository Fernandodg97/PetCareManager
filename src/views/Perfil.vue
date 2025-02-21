<template>
  <ion-page>
    <Encabezado/>

    <!-- Contenido -->
    <ion-content>
      <ion-title>Perfil</ion-title>
      <div class="content-container">
        <!-- Botón Cerrar Sesión (arriba derecha, en negro) -->
        <div class="logout-container">
          <ion-button
            fill="clear"
            color="dark"
            router-link="/petcaremanager/login"
            aria-label="Cerrar Sesión"
            class="logout-button"
          >
            Cerrar Sesión
          </ion-button>
        </div>

        <form>
          <!-- Foto de Perfil -->
          <div class="profile-photo-container">
            <img
              src="../assets/f1.png"
              alt="Foto de perfil"
              class="profile-photo"
            />
            <ion-button
              fill="clear"
              color="primary"
              router-link="/petcaremanager/perfil/cambiarfotoperfil"
              aria-label="Cambiar"
              class="change-photo-button"
            >
              Cambiar
            </ion-button>
          </div>
          
          <!-- Nombre -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Nombre</ion-label>
            <ion-input
              placeholder="Introduce el nombre"
              aria-label="Nombre"
              class="custom-input"
            ></ion-input>
          </ion-item>

          <!-- Apellido -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Apellido</ion-label>
            <ion-input
              placeholder="Introduce el apellido"
              aria-label="Apellido"
              class="custom-input"
            ></ion-input>
          </ion-item>

          <!-- Edad -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Edad</ion-label>
            <ion-input
              type="date"
              aria-label="Edad"
              class="custom-input"
            ></ion-input>
          </ion-item>

          <!-- Email -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Email</ion-label>
            <ion-input
              placeholder="Introduce el email"
              aria-label="Email"
              type="email"
              required
              class="custom-input"
            ></ion-input>
          </ion-item>

          <!-- Teléfono -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Teléfono</ion-label>
            <ion-input
              placeholder="Introduce el teléfono"
              aria-label="Teléfono"
              type="tel"
              pattern="^[0-9]{9}$"
              required
              class="custom-input"
            ></ion-input>
          </ion-item>

          <!-- Botones -->
          <div class="buttons-container">
            <ion-button
              color="primary"
              expand="block"
              router-link="/petcaremanager/perfil/cambiarcontrasena"
              aria-label="Cambiar contraseña"
            >
              Cambiar contraseña
            </ion-button>
            <ion-button
              color="primary"
              expand="block"
              router-link="/petcaremanager/perfil"
              aria-label="Guardar cambios"
            >
              Guardar
            </ion-button>
          </div>
        
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonInput } from '@ionic/vue';
import Encabezado from '@/components/Encabezado.vue';
</script>

<style scoped>
ion-content {
  padding: 16px;
}

.content-container {
  margin: 0 16px; /* Margen lateral */
  margin-bottom: 16px;
}

.logout-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

.logout-button {
  color: black;
  font-weight: bold;
}

.profile-photo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 10%;
  object-fit: cover;
  margin-bottom: 10px;
}

.change-photo-button {
  margin-top: 8px;
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
  /* flex-direction: column; */
}
.buttons-container ion-button {
  flex: 1;
  margin: 10px 5px; /* Espaciado entre los botones */
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

</style>
