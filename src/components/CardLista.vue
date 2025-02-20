<template>
    <ion-content>
        <div class="contenedor">
            <h1>{{titulo}}</h1>
            <ion-list class="lista-actividades">
                <ion-card v-for="(item, index) in items" :key="item.id"
                    :class="{ 'actividad-card-azul': index % 2 === 0, 'actividad-card-blanco': index % 2 !== 0 }">
                    <ion-item>
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
        </div>
    </ion-content>
</template>

<script setup lang="ts">
import { IonContent, IonList, IonCard, IonItem, IonButton } from '@ionic/vue';

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
}>();
</script>

<style scoped>
/* ion-content{
    height: 55%;
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

.lista-actividades {
    width: 100%;
    border-radius: 12px;
}

.actividad-card {
    border-radius: 12px;
    margin-bottom: 10px;
}

.actividad-card-azul ion-item, .actividad-card-blanco ion-item{
    --inner-border-width: 0 0 0px 0;
}

.actividad-card-azul {
    background-color: #809FFF;
    color: white;
}

.actividad-card-azul ion-item {
    --background: #809FFF;
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