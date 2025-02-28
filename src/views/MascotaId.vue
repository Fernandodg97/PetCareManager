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
                                <ion-item>
                                    <ion-label position="stacked" class="custom-label">Actividad</ion-label>
                                    <ion-input v-model="mascotaSeleccionada.mascota" class="custom-input"></ion-input>
                                </ion-item>
                                <ion-item>
                                    <ion-label position="stacked" class="custom-label">Raza:</ion-label>
                                    <ion-input v-model="mascotaSeleccionada.raza" class="custom-input"></ion-input>
                                </ion-item>
                                <ion-item>
                                    <ion-label position="stacked" class="custom-label">Edad:</ion-label>
                                    <ion-input v-model="mascotaSeleccionada.fecha" class="custom-input"></ion-input>
                                </ion-item>
                                <ion-item>
                                    <ion-label position="stacked" class="custom-label">Peso:</ion-label>
                                    <ion-input v-model="mascotaSeleccionada.peso" class="custom-input"></ion-input>
                                </ion-item>
                                <ion-item>
                                    <ion-label position="stacked" class="custom-label">Notas:</ion-label>
                                    <ion-input v-model="mascotaSeleccionada.notas" class="custom-input"></ion-input>
                                </ion-item>
                            </div>
                        </ion-item>
                    </ion-card>
                </ion-list>
                <!-- Botones -->
                <div class="buttons-container">
                    <ion-button color="primary" expand="block" router-link="/petcaremanager/home">Guardar</ion-button>
                    <ion-button color="danger" expand="block" @click="confirmarEliminar">Eliminar</ion-button>
                </div>
            </div>
        </ion-content>
        <ion-content v-else>
            <p>Mascota no encontrada</p>
        </ion-content>
        
        <ion-alert
            :is-open="showAlert"
            header="Confirmar eliminación"
            message="¿Estás seguro de que deseas eliminar esta mascota?"
            :buttons="[
                { text: 'Cancelar', role: 'cancel', handler: () => showAlert = false },
                { text: 'Eliminar', handler: eliminarMascota }
            ]"
        />
    </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonList, IonCard, IonItem, IonPage, IonInput, IonButton, IonLabel, IonAlert } from '@ionic/vue';
import { ref } from 'vue';
import Encabezado from '@/components/Encabezado.vue';
import { useRoute, useRouter } from "vue-router";

// Obtener el parámetro de la URL
const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);

// Estado del popup de confirmación
const showAlert = ref(false);

// Array de mascotas
const mascotas = ref([
    { id: 1, raza: "Labrador", fecha: "2025/02/14", mascota: "Rex", peso: "12Kg", notas: "Alergico al pollo", foto: "/src/assets/rex.png" },
    { id: 2, raza: "Gato Comun", fecha: "2025/02/15", mascota: "Lua", peso: "12Kg", notas: "Alergico al gelocatil", foto: "/src/assets/Lua.jpg" },
    { id: 3, raza: "Ficher", fecha: "2025/02/15", mascota: "Alioli", peso: "1.5Kg", notas: "Le gusta volar", foto: "/src/assets/agaporni.jpg" },
    { id: 4, raza: "Terrier", fecha: "2025/02/27", mascota: "Neitor", peso: "8Kg", notas: "Muy juguetón", foto: "/src/assets/terreneitor.jpg" }
]);

// Buscar la mascota seleccionada por su id
const mascotaSeleccionada = ref(mascotas.value.find(mascota => mascota.id === id));

// Función para mostrar el popup de confirmación
const confirmarEliminar = () => {
    showAlert.value = true;
};

// Función para eliminar la mascota
const eliminarMascota = () => {
    router.push("/petcaremanager/home");
};
</script>

<style scoped>
.contenedor {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #809fff;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    width: 90%;
    max-width: 500px;
    padding: 16px;
    margin: 20px auto;
}

.lista-mascotas {
    width: 100%;
    border-radius: 12px;
    background: #809fff;
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

@media (min-width: 768px) {
    .mascota-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        width: 100%;
    }
}

.mascota-image {
    width: 100%;
    max-height: 250px;
    border-radius: 10px;
    object-fit: cover;
    margin-bottom: 15px;
}

.buttons-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.buttons-container ion-button {
    width: 100%;
    margin-bottom: 10px;
}

@media (min-width: 768px) {
    .buttons-container {
        flex-direction: row;
        justify-content: space-between;
    }
    
    .buttons-container ion-button {
        width: 48%;
    }
    .contenedor {
    
    margin-right: 44%;
}
}
</style>