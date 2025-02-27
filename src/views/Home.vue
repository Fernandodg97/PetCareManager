<template>
  <ion-page class="phone">
    <ion-content>
      <Encabezado class="header" />
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-xl="9">
            <div class="container">
              <ion-button router-link="/petcaremanager/home/mascotaadd">Añadir Mascota</ion-button>

              <CardMascota :id="1" raza="Bulldog" fecha="2025/02/14" mascota="Rex" foto="/src/assets/rex.png" />
              <CardMascota :id="2" raza="Gato comun" fecha="2025/02/15" mascota="Lua" foto="/src/assets/Lua.jpg" />

              <CardLista titulo='Actividad' :items="listaDeActividades" ruta="actividad" />
              <CardLista titulo='Historial Medico' :items="listaDeHistorialmedico" ruta="historialmedico" />
              <CardLista titulo='Eventos' :items="listaDeEventos" ruta="eventos" />
            </div>
          </ion-col>
          <ion-col size="12" size-xl="3">
            <Encabezado class="notificaciones" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
  <ion-page class="pc">
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-xl="9">
            <div class="container">
              <div class="contenedorMascotas">
                <CardMascota :id="1" raza="Bulldog" fecha="2025/02/14" mascota="Rex" foto="/src/assets/rex.png" />
                <CardMascota :id="2" raza="Mezcla" fecha="2025/02/15" mascota="Lua" foto="/src/assets/Lua.jpg" />
                <ion-button router-link="/petcaremanager/home/mascotaadd">Añadir Mascota</ion-button>
              </div>
              <CardLista titulo='Actividad' :items="listaDeActividades" ruta="actividad" />
              <CardLista titulo='Historial Medico' :items="listaDeHistorialmedico" ruta="historialmedico" />
              <CardLista titulo='Eventos' :items="listaDeEventos" ruta="eventos" />
            </div>
          </ion-col>
          <ion-col size="12" size-xl="3">
            <Encabezado class="notificaciones" />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import { IonPage, IonContent, IonButton, IonGrid, IonRow, IonCol } from '@ionic/vue';
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
/* Eliminar márgenes y rellenos en el body y en el ion-col */
html,
body {
  margin: 0;
  padding: 0;
}

ion-grid {
  margin: 0;
  padding: 0;
}

ion-row {
  margin: 0;
  padding: 0;
}

ion-col {
  margin: 0;
  padding: 0;
}

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

/* PC */
.contenedorMascotas{
  background: rgba(128, 159, 255, 0.50);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px;
  padding: 20px;
}

/* Responsive */
.notificaciones {
  background: #809fff;
  height: 100vh;
  position: fixed;
}

/* Estilos para pantallas menos de 992px */
@media (max-width: 993px) {

  .nav,
  .notificaciones,
  .pc {
    display: none;
  }
}

/* Estilos para PC o pantallas grandes (más de 992px) */
@media (min-width: 993px) {

  .header,
  .phone {
    display: none;
  }
}
</style>