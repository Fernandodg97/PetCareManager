<template>
  <ion-page>
    <!-- Encabezado -->
    <Encabezado :btn="true"/>

    <!-- Contenido -->
    <ion-content>
      
      <div class="content-container">
        <ion-title class="add-pet-title">Editar Foto</ion-title>
        <form>
          <!-- Foto de Perfil -->
          <div class="profile-photo-container">
            <img
              src="../assets/f1.png"
              alt="Foto de perfil"
              class="profile-photo"
            />
          </div>

          <!-- Botones -->
          <div class="buttons-container">
            <!-- Botón Nueva Foto -->
              <ion-button
                color="primary"
                expand="block"
                aria-label="Subir nueva foto"
                @click="handleFileClick"
              >
                Nueva Foto

                <input
                ref="fileInput"
                type="file"
                accept="image/*"
                style="display: none"
                @change="handleFileChange"
              />
              </ion-button>
            <ion-button
              color="primary"
              expand="block"
              router-link="/petcaremanager/perfil"
              aria-label="Guardar cambios"
            >
              Eliminar
            </ion-button>
          </div>
        
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton,IonBackButton, IonButtons } from '@ionic/vue';
import { ref } from 'vue';
import Encabezado from '@/components/Encabezado.vue';
// Referencia al input de archivo
const fileInput = ref<HTMLInputElement | null>(null);

const handleFileClick = () => {
  if (fileInput.value) {
    fileInput.value.click();  // Simula un click en el input de archivo
  }
};

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    console.log('Archivo seleccionado:', file);
    // Aquí podrías añadir el código para manejar la carga de la foto
  }
};
</script>

<style scoped>
ion-content {
  padding: 16px;
}

.content-container {
  margin: 0 16px; /* Margen lateral */
  margin-top: 80px;
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
  width: 300px;
  height: 300px;
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
