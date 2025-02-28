<template>
  <ion-page>
    <!-- Encabezado -->
    <Encabezado :btn="true" />

    <!-- Contenido -->
    <ion-content v-if="evento">

      <div class="content-container">
        <ion-title class="add-pet-title">Editar Evento</ion-title>
        
        <ion-item>
          <ion-label position="stacked" class="custom-label">Mascota</ion-label>
          <ion-input v-model="evento.mascota" class="custom-input"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked" class="custom-label">Evento</ion-label>
          <ion-input v-model="evento.name" class="custom-input"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked" class="custom-label">Fecha</ion-label>
          <ion-input 
            type="date" 
            v-model="evento.fecha" 
            class="custom-input"
            :value="formatDate(evento.fecha)"
          ></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked" class="custom-label">Hora</ion-label>
          <ion-input 
            type="time" 
            v-model="evento.hora" 
            class="custom-input"
            :value="formatTime(evento.hora)"
          ></ion-input>
        </ion-item>

        <!-- Nuevos campos -->
        <ion-item>
          <ion-label position="stacked" class="custom-label">Ubicación</ion-label>
          <ion-input v-model="evento.ubicacion" class="custom-input"></ion-input>
        </ion-item>

        <Mapa/>

        <ion-item>
          <ion-label position="stacked" class="custom-label">Recordatorio</ion-label>
          <ion-input v-model="evento.recordatorio" class="custom-input"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="stacked" class="custom-label">Hora del Recordatorio</ion-label>
          <ion-input 
            type="time" 
            v-model="evento.horaRecordatorio" 
            class="custom-input"
            :value="formatTime(evento.horaRecordatorio)"
          ></ion-input>
        </ion-item>

        <!-- Botones -->
        <div class="buttons-container">
          <ion-button color="primary" expand="block" @click="guardarEvento">Guardar</ion-button>
          <ion-button color="danger" expand="block" @click="confirmarEliminar">Eliminar</ion-button>
        </div>
      </div>
    </ion-content>

    <ion-content v-else>
      <p>Evento no encontrado</p>
    </ion-content>
    
    <!-- Alerta de confirmación -->
    <ion-alert 
      :is-open="showAlert" 
      header="Confirmar eliminación"
      message="¿Estás seguro de que deseas eliminar este evento?" 
      :buttons="[ 
        { text: 'Cancelar', role: 'cancel', handler: () => showAlert = false },
        { text: 'Eliminar', handler: eliminarEvento }
      ]" 
    />
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonTitle,
  IonContent,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/vue";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import Mapa from '@/components/Mapa.vue'
import Encabezado from '@/components/Encabezado.vue';

// Obtener el parámetro de la URL
const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);

// Lista de eventos
const listaDeEventos = [
  { id: 1, name: 'Vacunacion', mascota: 'Valkyria', fecha: '2020-01-18', hora: '11:30', ubicacion: 'Veterinaria', recordatorio: 'Llevar documento', horaRecordatorio: '11:00' },
  { id: 2, name: 'Revision', mascota: 'Valkyria', fecha: '2020-01-18', hora: '13:00', ubicacion: 'Clínica Veterinaria', recordatorio: 'Recordar seguimiento', horaRecordatorio: '12:30' },
  { id: 3, name: 'Peluqueria', mascota: 'Lua', fecha: '2020-01-18', hora: '13:00', ubicacion: 'Peluquería Canina', recordatorio: 'Cortar las uñas', horaRecordatorio: '12:45' }
];

// Buscar el evento en la lista
const evento = ref(
  listaDeEventos.find(evento => evento.id === id)
);

// Funciones para formatear fecha y hora al formato adecuado
const formatDate = (fecha: string) => {
  const date = new Date(fecha);
  return date.toISOString().split('T')[0]; // Devuelve solo la fecha en formato YYYY-MM-DD
};

const formatTime = (hora: string) => {
  return hora.slice(0, 5); // Deja solo la parte de la hora HH:mm
};

// Estado del popup de confirmación
const showAlert = ref(false);

const confirmarEliminar = () => {
  showAlert.value = true;
};

const eliminarEvento = () => {
  // Eliminar el evento de la lista (simulación de eliminación)
  const index = listaDeEventos.findIndex(evento => evento.id === id);
  if (index !== -1) {
    listaDeEventos.splice(index, 1);
  }

  showAlert.value = false; // Cerrar la alerta antes de redirigir
  router.push("/petcaremanager/eventos"); // Redirigir a la lista de eventos después de eliminar
};

const guardarEvento = () => {
  // Lógica para guardar el evento (simulación)
  showAlert.value = false; // Cerrar la alerta antes de redirigir
  router.push("/petcaremanager/eventos"); // Redirigir después de guardar
};
</script>

<style scoped>
.content-container {
  margin: 20px 16px;
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
  justify-content: space-between;
  /* Botones alineados uno al lado del otro */
}

.buttons-container ion-button {
  flex: 1;
  margin: 0 5px;
}

.add-pet-title {
  text-align: center;
  font-size: 24px;
  /* Tamaño de fuente adecuado */
  font-weight: bold;
  /* Negrita para mayor énfasis */
  color: #1a1a1a;
  /* Color del texto */
  margin-top: 20px;
  /* Espaciado superior */
  margin-bottom: 20px;
  /* Espaciado inferior */
}

/* Estilos para PC o pantallas grandes (más de 992px) */
@media (min-width: 993px) {

  .content-container {
    padding-right: 20%;
  }
}
</style>
