<template>
  <ion-page>
    <Encabezado />
    <ion-content>
      <ion-button router-link="/petcaremanager/home/mascotaadd">Añadir Mascota</ion-button>
        <CardMascota id="1" raza="Bulldog" fecha="2025-02-14" mascota="Rex" foto="/src/assets/rex.png" ruta="/petcaremanager/home"/>
        <CardMascota id="1" raza="Labrador" fecha="2025-02-15" mascota="Max" foto="/src/assets/rex.png" ruta="/petcaremanager/home"/>

        <!-- <CardLista titulo='Actividad' :items="listaDeActividades" />
      <CardLista titulo='Historial Medico' :items="listaDeHistorialmedico" />
      <CardLista titulo='Eventos' :items="listaDeEventos" /> -->
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
  { id: 1, name: 'Paseo', hora: '', mascota: 'Valkyria', fecha: '18/01/2020', tratamiento: 'Rabia' },
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
.aaa{
  
}
ion-content {
  text-align: center;
  justify-content: center;
  display: flex;
}

ion-button {
  margin-top: 50px
}
</style>