<template>
    <ion-card :class="{ 'notificacion-leida': leida, 'notificacion-no-leida': !leida }">
        <ion-item @click="marcarComoLeida">
            <ion-label>
                <h2>{{ titulo }}</h2>
                <p>{{ mensaje }}</p>
            </ion-label>
            <ion-icon v-if="!leida" :icon="notificationsOutline" class="icono-notificacion"></ion-icon>
        </ion-item>
    </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonItem, IonLabel, IonIcon } from '@ionic/vue';
import { notificationsOutline } from 'ionicons/icons';
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps<{
    id: number;
    titulo: string;
    mensaje: string;
    leida: boolean;
}>();

const emit = defineEmits(['notificacionLeida']);

const leida = ref(props.leida);

const marcarComoLeida = () => {
    leida.value = true;
    emit('notificacionLeida', props.id);
};
</script>

<style scoped>
.notificacion-no-leida {
    background-color: #ffcccc;
}

.notificacion-leida {
    background-color: #e6e6e6;
}

.icono-notificacion {
    color: red;
    font-size: 20px;
    margin-left: 10px;
}
</style>
