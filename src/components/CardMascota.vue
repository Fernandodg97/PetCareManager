<template>
    <router-link :to="`home/${id}`">
        <div class="contenedor">
            <ion-list class="lista-mascotas">
                <img :src="foto" alt="Foto de la mascota" class="mascota-image" />
                <ion-card>
                    <ion-item>
                        <div class="mascota-grid">
                            <div class="mascota-nombre">{{ mascota }}</div>
                            <div class="mascota-info">
                                <p class="mascota-raza">Raza: {{ raza }}</p>
                                <p> | </p>
                                <p class="mascota-fecha">{{ fecha }}</p>
                            </div>
                        </div>
                    </ion-item>
                </ion-card>
            </ion-list>
        </div>
    </router-link>
    
</template>

<script setup lang="ts">
import { IonList, IonCard, IonItem } from '@ionic/vue';
import { defineProps } from 'vue';

defineProps<{
    id: number;
    raza: string;
    fecha: string;
    mascota: string;
    foto: string;
}>();
</script>

<style scoped>
/* router-link {
    all: unset;
} */
a {
    all: unset;
    width: 90%;
    touch-action: manipulation;
    cursor: pointer;
}

.contenedor {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #809fff;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    width: 100%;
    padding: 16px;
    margin: 10px auto; /* Centrar el contenedor horizontalmente */
}

.lista-mascotas {
    width: 100%;
    border-radius: 12px;
    background: #809fff;
    text-align: center; /* Centrar el texto */
}

.mascota-grid {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    width: 100%;
}

.mascota-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.mascota-nombre {
    font-size: 16px;
    text-align: center;
    font-weight: bold;
}

.mascota-raza, .mascota-fecha {
    font-size: 14px;
}

.mascota-image {
    width: 95%; /* Ajusta el tamaño de la imagen */
    height: 95%;
    object-fit: cover;
    margin-bottom: 10px;
}
</style>
