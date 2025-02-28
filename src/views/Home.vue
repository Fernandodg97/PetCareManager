<template>
  <ion-page>
    <Encabezado class="header" />
    <ion-content>
      <div v-if="esMovil" class="phone">
        <div class="container">
          <ion-button router-link="/petcaremanager/home/mascotaadd">Añadir Mascota</ion-button>
          <CardMascota :id="1" raza="Bulldog" fecha="2025/02/14" mascota="Terra" foto="/src/assets/rex.png" />
          <CardMascota :id="2" raza="Gato comun" fecha="2025/02/15" mascota="Lua" foto="/src/assets/Lua.jpg" />
          <CardMascota :id="3" raza="Ficher" fecha="2025/02/15" mascota="Alioli" foto="/src/assets/agaporni.jpg" />
          <CardMascota :id="4" raza="terrier" fecha="2025/02/27" mascota="Neitor" foto="/src/assets/terreneitor.jpg" />
          <CardLista titulo='Actividad' :items="listaDeActividades" ruta="actividad" />
          <CardLista titulo='Historial Medico' :items="listaDeHistorialmedico" ruta="historialmedico" />
          <CardLista titulo='Eventos' :items="listaDeEventos" ruta="eventos" />
        </div>
      </div>

      <div v-else class="pc">
        <div class="container">
          <div class="contenedorMascotas">
            <swiper :modules="[Navigation, Pagination]" navigation pagination slidesPerView="auto" spaceBetween="10"
              loop>
              <swiper-slide class="swiper-item">
                <CardMascota :id="1" raza="Bulldog" fecha="2025/02/14" mascota="Terra" foto="/src/assets/rex.png" />
              </swiper-slide>
              <swiper-slide class="swiper-item">
                <CardMascota :id="2" raza="Mezcla" fecha="2025/02/15" mascota="Lua" foto="/src/assets/Lua.jpg" />
              </swiper-slide>
              <swiper-slide class="swiper-item">
                <CardMascota :id="3" raza="Ficher" fecha="2025/02/15" mascota="Alioli"
                  foto="/src/assets/agaporni.jpg" />
              </swiper-slide>
              <swiper-slide class="swiper-item">
                <CardMascota :id="4" raza="terrier" fecha="2025/02/27" mascota="Neitor"
                  foto="/src/assets/terreneitor.jpg" />
              </swiper-slide>
            </swiper>
            <ion-button router-link="/petcaremanager/home/mascotaadd">Añadir Mascota</ion-button>
          </div>
          <CardLista titulo='Actividad' :items="listaDeActividades" ruta="actividad" />
          <CardLista titulo='Historial Medico' :items="listaDeHistorialmedico" ruta="historialmedico" />
          <CardLista titulo='Eventos' :items="listaDeEventos" ruta="eventos" />
        </div>
        <Encabezado class="not" />
      </div>
    </ion-content>
  </ion-page>
</template>


<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import Encabezado from '@/components/Encabezado.vue';
import CardLista from '@/components/CardLista.vue';
import CardMascota from '@/components/CardMascota.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const listaDeActividades = [
  { id: 1, name: 'Paseo', mascota: 'Valkyria', fecha: '18/01/2020', hora: '11:30h' },
  { id: 2, name: 'Comida', mascota: 'Valkyria', fecha: '18/01/2020', hora: '13:00h' },
  { id: 3, name: 'Comida', mascota: 'Lua', fecha: '18/01/2020', hora: '13:00h' }
];
const listaDeHistorialmedico = [
  { id: 1, name: 'Vacuna', hora: 'Rabia', mascota: 'Valkyria', fecha: '18/01/2020', },
  { id: 2, name: 'Operacion', hora: 'Castracion', mascota: 'Valkyria', fecha: '18/01/2020' },
  { id: 3, name: 'Vacuna', hora: '1ª Trivalente', mascota: 'Lua', fecha: '18/01/2020' }
];
const listaDeEventos = [
  { id: 1, name: 'Vacunacion', mascota: 'Valkyria', fecha: '18/01/2020', hora: '11:30h' },
  { id: 2, name: 'Revision', mascota: 'Valkyria', fecha: '18/01/2020', hora: '13:00h' },
  { id: 3, name: 'Peluquieria', mascota: 'Lua', fecha: '18/01/2020', hora: '13:00h' }
];

import { ref, onMounted, onUnmounted } from 'vue';

const esMovil = ref(window.innerWidth < 993);

const actualizarTamanoPantalla = () => {
  esMovil.value = window.innerWidth < 993;
};

onMounted(() => {
  window.addEventListener("resize", actualizarTamanoPantalla);
});

onUnmounted(() => {
  window.removeEventListener("resize", actualizarTamanoPantalla);
});

</script>

<style>
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
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 10px;
  text-align: center;
}

ion-button {
  margin-top: 30px;
  margin-bottom: 20px;
}



/* Responsive */
/* PC */
.contenedorMascotas {
  background: rgba(128, 159, 255, 0.5);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px;
  padding: 20px;
  width: 90vh;
}

.swiper-item {
  width: 260px !important;
}

.swiper {
  width: 100%;
  height: 500px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
}




/* Estilos para pantallas menos de 992px */
@media (max-width: 993px) {

  .nav,
  .not,
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
  .container {
    all: unset;
  }

  .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 20%;
  }

  .container a {
    width: 90vh;
  }
}
</style>