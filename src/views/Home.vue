<template>
  <ion-page>
    <Encabezado />
    <ion-content>
      <div class="container">
        <ion-button router-link="/petcaremanager/home/mascotaadd">Añadir Mascota</ion-button>

        <CardMascota :id="1" raza="Bulldog" fecha="2025/02/14" mascota="Rex" foto="/src/assets/rex.png" />
        <CardMascota :id="2" raza="Gato comun" fecha="2025/02/15" mascota="Lua" foto="/src/assets/Lua.jpg" />

        <CardLista titulo='Actividad' :items="listaDeActividades" ruta="actividad" />
        <CardLista titulo='Historial Medico' :items="listaDeHistorialmedico" ruta="historialmedico" />
        <CardLista titulo='Eventos' :items="listaDeEventos" ruta="eventos" />
      </div>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import Encabezado from '@/components/Encabezado.vue';
import CardLista from '@/components/CardLista.vue';
import CardMascota from '@/components/CardMascota.vue';
const listaDeActividades = [
  { id: 1, name: 'Paseo', mascota: 'Valkyria', fecha: '18/01/2020', hora: '11:30h' },
  { id: 2, name: 'Comida', mascota: 'Valkyria', fecha: '18/01/2020', hora: '13:00h' },
  { id: 3, name: 'Comida', mascota: 'Lua', fecha: '18/01/2020', hora: '13:00h' }
];
const listaDeHistorialmedico = [
  { id: 1, name: 'Vacuna', hora: '', mascota: 'Valkyria', fecha: '18/01/2020', tratamiento: 'Rabia' },
  { id: 2, name: 'Comida', hora: '', mascota: 'Valkyria', fecha: '18/01/2020', tratamiento: 'Castracion' },
  { id: 3, name: 'Comida', hora: '', mascota: 'Lua', fecha: '18/01/2020', tratamiento: '1ª Trivalente' }
];
const listaDeEventos = [
  { id: 1, name: 'Vacunacion', mascota: 'Valkyria', fecha: '18/01/2020', hora: '11:30h' },
  { id: 2, name: 'Revision', mascota: 'Valkyria', fecha: '18/01/2020', hora: '13:00h' },
  { id: 3, name: 'Peluquieria', mascota: 'Lua', fecha: '18/01/2020', hora: '13:00h' }
];

</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  /* Ocupar todo el ancho disponible */
  max-width: 500px;
  /* Evitar que los elementos sean demasiado anchos */
  margin: 0 auto;
  /* Centrar horizontalmente */
  margin-bottom: 10px;
  text-align: center;
}

ion-button {
  margin-top: 30px;
  margin-bottom: 20px;
}
</style>