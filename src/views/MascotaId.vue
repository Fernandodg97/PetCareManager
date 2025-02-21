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
                                <div class="mascota-info">
                                    <p class="mascota-raza">Raza: {{ mascotaSeleccionada.raza }}</p>
                                    <p> | </p>
                                    <p class="mascota-fecha">{{ mascotaSeleccionada.fecha }}</p>
                                </div>
                            </div>
                        </ion-item>
                    </ion-card>
                </ion-list>
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
    { id: 1, raza: "Bulldog", fecha: "2025-02-14", mascota: "Rex", foto: "/src/assets/rex.png" },
    { id: 2, raza: "Labrador", fecha: "2025-02-15", mascota: "Max", foto: "/src/assets/rex.png" }
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
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    align-items: center;
    gap: 10px;
    width: 100%;
}

.mascota-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.mascota-raza {
    font-weight: bold;
}

.mascota-fecha {
    font-size: 12px;
}

.mascota-hora {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
}

.mascota-nombre {
    font-size: 14px;
    text-align: center;
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
</style>
