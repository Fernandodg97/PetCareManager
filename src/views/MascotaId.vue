<template>
    <ion-page>
        <Encabezado :btn="true" />
        <ion-content v-if="mascotaSeleccionada">
            <div class="contenedor">
                <ion-list class="lista-mascotas">
                    <img :src="mascotaSeleccionada.foto" alt="Foto de la mascota" class="mascota-image" />
                    <ion-card>
                        <ion-item>
                            <div class="mascota-grid">
                                <div class="mascota-nombre">{{ mascotaSeleccionada.mascota }}</div>
                                <div class="mascota-raza"><strong class="titulo">Raza: </strong>{{ mascotaSeleccionada.raza }}</div>
                                <div class="mascota-fecha"><strong class="titulo">Edad: </strong>{{ mascotaSeleccionada.fecha }}</div>
                                <div class="mascota-peso"><strong class="titulo">Peso: </strong>{{ mascotaSeleccionada.peso }}</div>
                                <div class="mascota-notas"><strong class="titulo">Notas: </strong>{{ mascotaSeleccionada.notas }}</div>
                            </div>
                        </ion-item>
                    </ion-card>
                </ion-list>
                <!-- Botones -->
        <div class="buttons-container">
          <ion-button color="primary" expand="block" router-link="/petcaremanager/home">Guardar</ion-button>
          <ion-button color="danger" expand="block" router-link="/petcaremanager/home">Eliminar</ion-button>
        </div>
            </div>
        </ion-content>
        <ion-content v-else>
            <p>Mascota no encontrada</p>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonList, IonCard, IonItem, IonPage } from '@ionic/vue';
import { ref } from 'vue';
import Encabezado from '@/components/Encabezado.vue';
import { useRoute } from "vue-router";

// Obtener el parámetro de la URL
const route = useRoute();
const id = Number(route.params.id);

// Array de mascotas
const mascotas = ref([
    { id: 1, raza: "Labrador", fecha: "2025/02/14", mascota: "Rex", peso: "12Kg", notas: "Alergico al pollo", foto: "/src/assets/rex.png" },
    { id: 2, raza: "Gato Comun", fecha: "2025/02/15", mascota: "Lua", peso: "12Kg", notas: "Alergico al gelocatil", foto: "/src/assets/Lua.jpg" }
]);

// Buscar la mascota seleccionada por su id
const mascotaSeleccionada = mascotas.value.find(mascota => mascota.id === id);
</script>


<style scoped>
/* ion-content {
    height: 70%;
} */

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

.lista-mascotas {
    width: 100%;
    border-radius: 12px;
    background: #809fff;
}

.mascota-card {
    border-radius: 12px;
    margin-bottom: 10px;
}

.mascota-item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
}

.mascota-grid {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
}

.mascota-nombre {
    font-size: 18px;
    font-weight: bold;
}

/* Estilo para la imagen */
.mascota-image {
    width: 95%;
    /* Ajusta el tamaño de la imagen según necesites */
    height: 95%;
    /* Asegúrate de que el alto y ancho sean iguales */
    border-radius: 5%;
    /* Esto hará que la imagen sea redonda */
    object-fit: cover;
    /* Asegura que la imagen se recorte si es necesario */
}

.buttons-container {
  margin-top: 20px;
  display: flex;
  justify-content: space-between; /* Botones alineados uno al lado del otro */
}

.buttons-container ion-button {
  flex: 1;
  margin: 0 5px;
}
</style>
