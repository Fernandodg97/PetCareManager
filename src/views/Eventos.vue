<template>
  <ion-page>
    <Encabezado/>
    <ion-content>
      <ActividadLista titulo='Eventos' :items="listaDeEventos" addButtonLink="/petcaremanager/eventos/eventosadd" ruta="/petcaremanager/eventos"/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import ActividadLista from '@/components/ActividadLista.vue';
import Encabezado from '@/components/Encabezado.vue';
const listaDeEventos = [
  { id: 1, name: 'Vacunacion', mascota: 'Valkyria', fecha: '18/01/2020', hora: '11:30h' },
  { id: 2, name: 'Revision', mascota: 'Valkyria', fecha: '18/01/2020', hora: '13:00h' },
  { id: 3, name: 'Peluquieria', mascota: 'Lua', fecha: '18/01/2020', hora: '13:00h' }
];
</script>

<style scoped>

.contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #809fff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 90%;
  padding: 16px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

.lista-actividades {
  width: 100%;
  border-radius: 12px;
}

.actividad-card {
  border-radius: 12px;
  margin-bottom: 10px;
}

.actividad-card-azul {
  background-color: #809FFF;
  color: white;
}

.actividad-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
}

.actividad-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  gap: 10px;
  width: 100%;
}

.actividad-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.actividad-nombre {
  font-weight: bold;
}

.actividad-fecha {
  font-size: 12px;
  color: gray;
}

.actividad-hora {
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}

.actividad-mascota {
  font-size: 14px;
  text-align: center;
  font-weight: bold;
}

.boton-anadir {
  margin-top: 16px;
  color: white;
  font-weight: bold;
}
</style>