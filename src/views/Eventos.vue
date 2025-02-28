<template>
  <ion-page>
    <Encabezado />
    <ion-content>
      <div class="container">
        <ActividadLista titulo='Eventos' :items="listaDeEventos" addButtonLink="/petcaremanager/eventos/eventosadd"
          ruta="/petcaremanager/eventos" />
      </div>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import ActividadLista from '@/components/ActividadLista.vue';
import Encabezado from '@/components/Encabezado.vue';
import CardElemento from '@/components/CardElemento.vue';
const listaDeEventos = [
  { id: 1, name: 'Vacunacion', mascota: 'Valkyria', fecha: '18/01/2020', hora: '11:30h' },
  { id: 2, name: 'Revision', mascota: 'Valkyria', fecha: '18/01/2020', hora: '13:00h' },
  { id: 3, name: 'Peluquieria', mascota: 'Lua', fecha: '18/01/2020', hora: '13:00h' }
];
</script>

<style scoped>
/* Estilos para pantallas menos de 992px */
@media (max-width: 993px) {
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
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 10px;
  text-align: center;
}

/* Estilos para PC o pantallas grandes (más de 992px) */
@media (min-width: 993px) {
  .contenedor {
    width: 140%;
  }

  .container {
    all: unset;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 35%;
    padding-right: 34%;
  }
}
</style>