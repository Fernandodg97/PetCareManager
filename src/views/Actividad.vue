<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Actividad</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="contenedorExterno">
        <div class="contenedorInterno">
          <h1>Actividad</h1>
          
          <ion-list class="lista-actividades">
            <ion-card v-for="item in items" :key="item.id" class="actividad-card">
              <ion-item :router-link="`actividad/${item.id}`" detail class="actividad-item">
                <div class="actividad-info">
                  <p class="actividad-nombre">{{ item.name }}</p>
                  <p class="actividad-fecha">{{ item.fecha }}</p>
                </div>
                <div class="actividad-hora">{{ item.hora }}</div>
                <div class="actividad-mascota">{{ item.mascota }}</div>
              </ion-item>
            </ion-card>
          </ion-list>
          
        </div>

        <ion-button expand="block" router-link="/petcaremanager/actividad/actividadadd" class="boton-anadir">
          Añadir
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonItem, IonList, IonCard } from '@ionic/vue';

const items = [
  { id: 1, name: 'Paseo', mascota: 'Valkyria', fecha: '18/01/2020', hora: '11:30h' },
  { id: 2, name: 'Comida', mascota: 'Valkyria', fecha: '18/01/2020', hora: '13:00h' },
  { id: 3, name: 'Comida', mascota: 'Lua', fecha: '18/01/2020', hora: '13:00h' }
];
</script>

<style scoped>
/* Estilos generales */
ion-content {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px;
  background: #a2b3ff; /* Fondo azul claro */
}

/* Contenedor externo */
.contenedorExterno {
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 350px;
}

/* Contenedor interno */
.contenedorInterno {
  background: #809FFF;
  padding: 16px;
  border-radius: 8px;
}

/* Título */
h1 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
}

/* Tarjetas de actividad */
.actividad-card {
  background: #f5f6ff;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

/* Estilo de cada actividad */
.actividad-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
}

/* Información de la actividad */
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
  color: gray;
}

/* Hora y mascota */
.actividad-hora {
  font-size: 14px;
  font-weight: bold;
}

.actividad-mascota {
  font-size: 14px;
  color: white;
}

/* Botón de añadir */
.boton-anadir {
  margin-top: 16px;
  color: white;
  font-weight: bold;
}
</style>
