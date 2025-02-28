<template>
    <ion-card>
      <ion-card-header>
        <ion-card-title>{{ item.name }}</ion-card-title>
        <ion-card-subtitle v-if="item.fecha">{{ formatDate(item.fecha) }} - {{ item.hora }}</ion-card-subtitle>
      </ion-card-header>
      
      <ion-card-content>
        <ion-list>
          <ion-item v-for="(value, key) in filteredItem" :key="key">
            <ion-label>{{ formatKey(key) }}:</ion-label>
            <ion-text>{{ value }}</ion-text>
          </ion-item>
        </ion-list>
      </ion-card-content>
  
      <ion-button expand="block" color="primary" @click="$emit('editar', item.id)">Editar</ion-button>
      <ion-button expand="block" color="danger" @click="$emit('eliminar', item.id)">Eliminar</ion-button>
    </ion-card>
  </template>
  
  <script setup lang="ts">
  import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel, IonText, IonButton } from '@ionic/vue';
  import { computed, defineProps } from 'vue';
  
  const props = defineProps<{ item: Record<string, any> }>();
  
  // Función para formatear la fecha
  const formatDate = (fecha: string) => {
    const date = new Date(fecha);
    return date.toISOString().split('T')[0];
  };
  
  // Ocultar campos irrelevantes
  const filteredItem = computed(() => {
    const { id, name, fecha, hora, ...rest } = props.item;
    return rest;
  });
  
  // Convertir clave a formato legible
  const formatKey = (key: string) => {
    return key.charAt(0).toUpperCase() + key.slice(1);
  };
  </script>
  
  <style scoped>
  ion-card {
    margin: 16px;
  }
  
  ion-card-title {
    font-size: 20px;
    font-weight: bold;
  }
  
  ion-card-subtitle {
    font-size: 14px;
    color: gray;
  }
  
  ion-button {
    margin: 8px 0;
  }
  </style>
  