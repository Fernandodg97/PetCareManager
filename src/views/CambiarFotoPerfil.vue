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
            
            <!-- Botón Eliminar con Confirmación -->
            <ion-button
              color="danger"
              expand="block"
              aria-label="Eliminar foto"
              @click="confirmarEliminar"
            >
              Eliminar
            </ion-button>
          </div>
        </form>
      </div>

      <!-- Pop-up de Confirmación -->
      <ion-alert
        :is-open="showAlert"
        header="Confirmar Eliminación"
        message="¿Estás seguro de que deseas eliminar esta foto?"
        :buttons="[
          { text: 'Cancelar', role: 'cancel', handler: () => showAlert = false },
          { text: 'Eliminar', handler: eliminarFoto }
        ]"
      />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonContent, IonButton, IonAlert } from '@ionic/vue';
import Encabezado from '@/components/Encabezado.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const fileInput = ref<HTMLInputElement | null>(null);
const showAlert = ref(false);

const handleFileClick = () => {
  fileInput.value?.click();
};

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    console.log('Archivo seleccionado:', input.files[0]);
  }
};

// Mostrar alerta de confirmación
const confirmarEliminar = () => {
  showAlert.value = true;
};

// Acción de eliminar la foto
const eliminarFoto = () => {
  console.log('Foto eliminada');
  router.push('/petcaremanager/perfil');
};
</script>

<style scoped>
ion-content {
  padding: 16px;
}

.content-container {
  margin: 0 16px;
  margin-top: 80px;
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

.buttons-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.buttons-container ion-button {
  flex: 1;
  margin: 10px 5px;
}

.add-pet-title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #1a1a1a;
  margin-top: 20px;
  margin-bottom: 20px;
}

@media (min-width: 993px) {
  .content-container {
    padding-right: 20%;
  }
}
</style>
