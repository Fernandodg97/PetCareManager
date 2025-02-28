<template>
        <div class="contenedor">
            <h1>{{titulo}}</h1>

            <ion-list class="lista-actividades">
                <ion-card v-for="(item, index) in items" :key="item.id"
                    :class="{ 'actividad-card-azul': index % 2 === 0, 'actividad-card-blanco': index % 2 !== 0 }">
                    <ion-item :router-link="`${ruta}/${item.id}`" detail class="actividad-item">
                        <div class="actividad-grid">
                            <div class="actividad-info">
                                <p class="actividad-nombre">{{ item.name }}</p>
                                <p class="actividad-fecha">{{ item.fecha }}</p>
                            </div>
                            <div class="actividad-hora">{{ item.hora }}</div>
                            <div class="actividad-mascota">{{ item.mascota }}</div>
                        </div>
                    </ion-item>
                </ion-card>
            </ion-list>

            <ion-button expand="block" :router-link="addButtonLink" class="boton-anadir">
                Añadir
            </ion-button>
        </div>
</template>

<script setup lang="ts">
import {IonList, IonCard, IonItem, IonButton } from '@ionic/vue';

import { defineProps } from 'vue';

interface Actividad {
    id: number;
    name: string;
    fecha: string;
    hora: string;
    mascota: string;
}

defineProps<{
    titulo: string;
    items: Actividad[];
    addButtonLink: string;
    ruta: string;
}>();
</script>

<style scoped>
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
    margin: 10px auto; /* Centrar el contenedor */
}

h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
    color: #0a0a0a;
    text-align: center;
}

ion-card{
    margin: 0px;
}

.lista-actividades {
    width: 100%; 
    border-radius: 12px;
    padding: 0px;
}

/* Colores alternos para cada tarjeta */
.actividad-card-azul {
    background: rgba(128, 159, 255, 0.50);
    color: white;
}

.actividad-card-blanco {
    background-color: #ffffff;
    color: #333;
}

/* Eliminar bordes internos en ion-item */
.actividad-card-azul ion-item, 
.actividad-card-blanco ion-item {
    --inner-border-width: 0 0 0px 0;
    --background: transparent;
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
    font-size: 16px;
}

.actividad-fecha {
    font-size: 12px;
}

.actividad-hora, .actividad-mascota {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
}

.boton-anadir {
    margin-top: 16px;
    color: white;
    font-weight: bold;
}
</style>
