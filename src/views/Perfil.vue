<template>
  <ion-page>
    <Encabezado />

    <ion-content>
      <div class="content-container">
        <ion-title class="add-pet-title">Perfil</ion-title>
        <div class="logout-container">
          <ion-button fill="clear" color="dark" @click="confirmarCerrarSesion" class="logout-button">
            Cerrar Sesión
          </ion-button>
        </div>

        <form>
          <div class="profile-photo-container">
            <img src="../assets/f1.png" alt="Foto de perfil" class="profile-photo" />
            <ion-button fill="clear" color="primary" router-link="/petcaremanager/perfil/cambiarfotoperfil">
              Cambiar
            </ion-button>
          </div>

          <ion-item>
            <ion-label position="stacked" class="custom-label">Nombre</ion-label>
            <ion-input v-model="perfil.nombre" class="custom-input"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked" class="custom-label">Apellido</ion-label>
            <ion-input v-model="perfil.apellido" class="custom-input"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked" class="custom-label">Edad</ion-label>
            <ion-input type="date" v-model="perfil.edad" class="custom-input"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked" class="custom-label">Email</ion-label>
            <ion-input v-model="perfil.email" type="email" required class="custom-input"></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked" class="custom-label">Teléfono</ion-label>
            <ion-input v-model="perfil.telefono" type="tel" required class="custom-input"></ion-input>
          </ion-item>

          <div class="buttons-container">
            <ion-button color="primary" expand="block" router-link="/petcaremanager/perfil/cambiarcontrasena">
              Cambiar contraseña
            </ion-button>
            <ion-button color="primary" expand="block" @click="handleSave">
              Guardar
            </ion-button>
          </div>
        </form>
      </div>

      <ion-alert
        :is-open="showAlert"
        header="Confirmar Cierre de Sesión"
        message="¿Estás seguro de que deseas cerrar sesión?"
        :buttons="[
          { text: 'Cancelar', role: 'cancel', handler: () => showAlert = false },
          { text: 'Cerrar Sesión', handler: cerrarSesion }
        ]"
      />

      <ion-alert
        :is-open="showSuccessAlert"
        header="Éxito"
        message="Los datos se han guardado correctamente."
        :buttons="['OK']"
        @didDismiss="showSuccessAlert = false"
      />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonContent, IonButton, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonAlert } from '@ionic/vue';
import Encabezado from '@/components/Encabezado.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const perfiles = ref([
  { id: 1, nombre: 'Fernando', apellido: 'Diaz Gutierrez', edad: '1997-03-10', email: 'fernando@example.com', telefono: '600123456', foto: '../assets/f1.png' },
  { id: 2, nombre: 'Ana', apellido: 'Martínez López', edad: '2000-05-15', email: 'ana@example.com', telefono: '600654321', foto: '../assets/f2.png' }
]);

const perfilSeleccionado = ref(perfiles.value[0].id);
const perfil = ref({ ...perfiles.value.find(p => p.id === perfilSeleccionado.value) });
const showAlert = ref(false);
const showSuccessAlert = ref(false);

const confirmarCerrarSesion = () => {
  showAlert.value = true;
};

const cerrarSesion = () => {
  router.push('/petcaremanager/login');
};

const handleSave = () => {
  console.log('Datos guardados:', perfil.value);
  showSuccessAlert.value = true;
};

const cargarPerfil = () => {
  perfil.value = { ...perfiles.value.find(p => p.id === perfilSeleccionado.value) };
};
</script>

<style scoped>
ion-content {
  padding: 16px;
}

.content-container {
  margin: 0 16px;
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
  font-size: 10px;
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
  color: #A0A0A0;
}

.custom-input {
  border-bottom: 2px solid #809fff;
  padding-bottom: 4px;
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

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
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