<template>
  <ion-page>
    <!-- Encabezado -->
    <Encabezado :btn="true"/>

    <!-- Contenido -->
    <ion-content>
      <form>
        <div class="content-container">
          <ion-title class="add-pet-title">Historial Médico</ion-title>
          
          <!-- Mascota -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Mascota</ion-label>
            <ion-input v-model="historial.mascota" placeholder="Introduce el nombre de la mascota" aria-label="Nombre de la mascota" class="custom-input"></ion-input>
          </ion-item>

          <!-- Intervención -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Intervención</ion-label>
            <ion-input v-model="historial.intervencion" placeholder="Describe la intervención realizada" aria-label="Descripción de la intervención" class="custom-input"></ion-input>
          </ion-item>

          <!-- Fecha y Hora -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Fecha</ion-label>
            <ion-input type="date" v-model="historial.fecha" aria-label="Fecha de la intervención" class="custom-input"></ion-input>
          </ion-item>
          
          <ion-item>
            <ion-label position="stacked" class="custom-label">Hora</ion-label>
            <!-- Asegúrate de que el formato de la hora sea HH:mm -->
            <ion-input type="time" v-model="formattedHora" aria-label="Hora de la intervención" class="custom-input"></ion-input>
          </ion-item>

          <!-- Ubicación -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Ubicación</ion-label>
            <ion-input v-model="ubicacion" placeholder="Selecciona la ubicación" readonly aria-label="Ubicación del servicio" class="custom-input"></ion-input>
          </ion-item>

          <!-- Mapa -->
          <Mapa/>

          <ion-item>
            <ion-label position="stacked" class="custom-label">Recordatorio</ion-label>
            <ion-input v-model="historial.recordatorio" placeholder="Introduce un recordatorio" aria-label="Recordatorio de intervención" class="custom-input"></ion-input>
          </ion-item>

          <!-- Archivo Adjunto -->
          <ion-item>
            <ion-label position="stacked" class="custom-label">Archivo Adjunto</ion-label>
            <ion-input type="file" accept="application/pdf, image/*" aria-label="Subir archivo adjunto" class="custom-input" :value="archivo"></ion-input>
          </ion-item>

          <!-- Botones -->
          <div class="buttons-container">
            <ion-button color="primary" expand="block" @click="guardarHistorial" aria-label="Guardar historial médico">Guardar</ion-button>
            <ion-button color="danger" expand="block" @click="confirmarEliminar" aria-label="Eliminar historial médico">Eliminar</ion-button>
          </div>
        </div>
      </form>
    </ion-content>

    <!-- Alerta de confirmación -->
    <ion-alert 
      :is-open="showAlert" 
      header="Confirmar eliminación"
      message="¿Estás seguro de que deseas eliminar este historial médico?" 
      :buttons="[ 
        { text: 'Cancelar', role: 'cancel', handler: () => showAlert = false },
        { text: 'Eliminar', handler: eliminarHistorial }
      ]" 
    />
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonButton, IonItem, IonLabel, IonInput, IonAlert } from "@ionic/vue";
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Encabezado from '@/components/Encabezado.vue';
import Mapa from '@/components/Mapa.vue'

// Datos de historial médico
const listaDeHistorialmedico = ref([
  { id: 1, name: 'Vacuna', intervencion:'Rabia' , hora: '08:30', mascota: 'Valkyria', fecha: '2020-01-18', recordatorio: 'Revisión en 1 mes', ubicacion: 'Calle Ficticia 123, Ciudad Imaginaria', archivo: 'vacuna_1.pdf' },
  { id: 2, name: 'Operacion', intervencion:'Castracion', hora: '14:00', mascota: 'Valkyria', fecha: '2020-01-18', recordatorio: 'Control post-operatorio', ubicacion: 'Avenida Imaginaria 45, Ciudad Ficticia', archivo: 'operacion_1.pdf' },
  { id: 3, name: 'Vacuna', intervencion:'1ª Trivalente', hora: '16:00', mascota: 'Lua', fecha: '2020-01-18', recordatorio: 'Repetir vacunación en 2 años', ubicacion: 'Calle Mágica 999, Barrio Ficticio', archivo: 'vacuna_2.pdf' }
]);

// Obtener el parámetro de la URL
const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);

// Variables reactivas
const ubicacion = ref('');
const archivo = ref('');
const historial = ref({
  mascota: '',
  intervencion: '',
  fecha: '',
  hora: '',
  recordatorio: '',
  ubicacion: '',
  archivo: ''
});

// Alerta para confirmar la eliminación
const showAlert = ref(false);

// Cargar los datos del historial médico según el ID en la URL
onMounted(() => {
  const historialSeleccionado = listaDeHistorialmedico.value.find(h => h.id === id);
  if (historialSeleccionado) {
    historial.value = { ...historialSeleccionado };
    ubicacion.value = historialSeleccionado.ubicacion;
    archivo.value = historialSeleccionado.archivo;
  }
});

// Computed property para formatear la hora si es necesario
const formattedHora = computed({
  get: () => historial.value.hora,
  set: (newHora: string) => {
    historial.value.hora = newHora; // Actualiza el valor de hora en el historial
  }
});

// Función para confirmar la eliminación del historial
const confirmarEliminar = () => {
  showAlert.value = true;
};

// Función para eliminar el historial médico
const eliminarHistorial = () => {
  const index = listaDeHistorialmedico.value.findIndex(h => h.id === id);
  if (index !== -1) {
    listaDeHistorialmedico.value.splice(index, 1);
  }
  showAlert.value = false; // Cerrar la alerta antes de redirigir
  router.push("/petcaremanager/historialmedico"); // Redirigir a la lista de historial médico después de eliminar
};

// Función para guardar el historial médico
const guardarHistorial = () => {
  // Lógica para guardar el historial (simulación)
  showAlert.value = false; // Cerrar la alerta antes de redirigir
  router.push("/petcaremanager/historialmedico"); // Redirigir después de guardar
};
</script>

<style scoped>
.content-container {
  margin: 20px 16px;
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
  justify-content: space-between;
}

.buttons-container ion-button {
  flex: 1;
  margin: 0 5px;
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

/* Estilos para pantallas grandes */
@media (min-width: 993px) {
  .content-container {
    padding-right: 20%;
  }
}
</style>
