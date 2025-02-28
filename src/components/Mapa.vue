<template>
    <div ref="mapContainer" class="map-container" style="height: 300px;"></div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, defineProps } from "vue";
  import L from "leaflet";
  import { useRouter } from "vue-router";
  
  // Props para recibir la ubicación predeterminada y permitir la selección
  const props = defineProps({
    ubicacion: String,
  });
  
  // Elemento donde se renderizará el mapa
  const mapContainer = ref<HTMLDivElement | null>(null);
  const router = useRouter();
  
  // Función para inicializar el mapa
  onMounted(() => {
    if (mapContainer.value) {
      // Crear el mapa con Leaflet
      const map = L.map(mapContainer.value).setView([41.3784, 2.2917], 13); // Coordenadas de ejemplo (Barcelona)
  
      // Añadir un tile layer (fondo del mapa)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
  
      // Si la ubicación está disponible, centrar el mapa en esa ubicación
      if (props.ubicacion) {
        const geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(props.ubicacion)}`;
        fetch(geocodeUrl)
          .then(response => response.json())
          .then(data => {
            if (data.length > 0) {
              const lat = parseFloat(data[0].lat);
              const lon = parseFloat(data[0].lon);
              map.setView([lat, lon], 13); // Centra el mapa
              L.marker([lat, lon]).addTo(map); // Añadir marcador en la ubicación
            }
          });
      }
  
      // Permitir al usuario seleccionar una ubicación haciendo clic en el mapa
      map.on("click", (e: any) => {
        const lat = e.latlng.lat;
        const lon = e.latlng.lng;
  
        // Redirigir a la página con las coordenadas seleccionadas
        router.push({
          name: "historialmedico",
          query: { ubicacion: `${lat},${lon}` },
        });
      });
    }
  });
  </script>
  
  <style scoped>
  .map-container {
    width: 100%;
    height: 300px;
    border: 2px solid #000; /* Borde de 2px de grosor, color negro */
    border-radius: 8px; /* Borde redondeado (opcional) */
  }
  </style>
  