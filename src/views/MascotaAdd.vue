<template>
    <ion-page>
        <Encabezado :btn="true"/>
        <!-- Contenido -->
        <ion-content>
            <ion-title>Añadir Mascota</ion-title>
            <div class="content-container">
                <!-- Foto de Perfil -->
                <div class="profile-photo-container">
                    <img src="../assets/no_img.png" alt="Foto de perfil" class="profile-photo" />
                    <ion-button fill="clear" color="primary" @click="handleFileClick"
                    
                        aria-label="Subir nueva foto" class="change-photo-button">
                        Nueva foto
                        <input ref="fileInput" type="file" accept="image/*" style="display: none"
                        @change="handleFileChange" />
                    </ion-button>
                </div>

                <!-- Nombre -->
                <ion-item>
                    <ion-label position="stacked" class="custom-label">Nombre</ion-label>
                    <ion-input placeholder="Introduce el nombre" aria-label="Nombre" class="custom-input"></ion-input>
                </ion-item>

                <!-- Raza -->
                <ion-item>
                    <ion-label position="stacked" class="custom-label">Raza</ion-label>
                    <ion-input placeholder="Introduce la raza" aria-label="Raza" class="custom-input"></ion-input>
                </ion-item>

                <!-- Edad -->
                <ion-item>
                    <ion-label position="stacked" class="custom-label">Edad</ion-label>
                    <ion-input type="date" aria-label="Edad" class="custom-input"></ion-input>
                </ion-item>

                <!-- Peso kg -->
                <ion-item>
                    <ion-label position="stacked" class="custom-label">Peso Kg</ion-label>
                    <ion-input placeholder="Introduce el peso" aria-label="Peso" type="number" required
                        class="custom-input"></ion-input>
                </ion-item>

                <!-- Notas -->
                <ion-item>
                    <ion-label position="stacked" class="custom-label">Notas</ion-label>
                    <ion-input placeholder="Introduce una nota" aria-label="Nota" class="custom-input"></ion-input>
                </ion-item>

                <!-- Botones -->
                <div class="buttons-container">
                    <ion-button color="primary" expand="block" router-link="/petcaremanager/home">Añadir</ion-button>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonLabel, IonInput } from '@ionic/vue';
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
    margin: 0 16px;
    /* Margen lateral */
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
    margin-top: 20px;
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
    color: #A0A0A0;
    /* Texto gris clarito para los labels */
}

.custom-input {
    border-bottom: 2px solid #809fff;
    /* Línea azul debajo del input */
    padding-bottom: 4px;
}

.buttons-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    /* Centrado del botón */
}

ion-button {
    flex: 1;
    margin: 0 5px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>