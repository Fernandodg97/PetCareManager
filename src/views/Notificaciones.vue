<template>
  <ion-page>
    <Encabezado />
    <ion-content>
      <ion-list v-if="notificaciones.length > 0">
                  <NotificationItem v-for="noti in notificaciones" :key="noti.id" :id="noti.id"
                    :titulo="noti.titulo" :mensaje="noti.mensaje" :leida="noti.leida"
                    @notificacionLeida="marcarNotificacionLeida" />
                </ion-list>
                <p v-else>No hay notificaciones disponibles.</p>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonList } from '@ionic/vue';
import { ref } from 'vue';
import Encabezado from '@/components/Encabezado.vue';
import NotificationItem from '@/components/NotificationItem.vue';


const notificaciones = ref([
  { id: 1, titulo: "Recordatorio", mensaje: "Mañana tienes una cita con el Peluquero", leida: false },
  { id: 2, titulo: "Recordatorio", mensaje: "Mañana tienes una cita con el veterinario", leida: false },
  { id: 3, titulo: "Alerta de comida", mensaje: "Hora de alimentar a Luna 🐶", leida: false },
  { id: 4, titulo: "Paseo pendiente", mensaje: "No olvides sacar a Max a su paseo diario 🐕", leida: true },
  { id: 5, titulo: "Vacunación", mensaje: "Recuerda que el refuerzo de vacunas de Tom está próximo 📅", leida: true },
  { id: 6, titulo: "Evento cercano", mensaje: "Este sábado hay una feria de adopción en el parque central 🏞️", leida: true },
  { id: 7, titulo: "Revisión médica", mensaje: "Hoy es el chequeo de salud anual de Nala 🏥", leida: true },
  { id: 8, titulo: "Pedido listo", mensaje: "Tu pedido de alimento premium ha sido enviado 🚚", leida: true },
]);


const marcarNotificacionLeida = (id: number) => {
  const notificacion = notificaciones.value.find(noti => noti.id === id);
  if (notificacion) notificacion.leida = true;
};
</script>

<style>
</style>