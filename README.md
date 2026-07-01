# Pet Care Manager

[![Vue](https://img.shields.io/badge/Vue_3-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![Ionic](https://img.shields.io/badge/Ionic_8-3880FF?style=for-the-badge&logo=ionic&logoColor=white)](https://ionicframework.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)](https://capacitorjs.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=leaflet&logoColor=white)](https://leafletjs.com/)

---

## Para recruiters

Aplicación móvil para el cuidado de mascotas construida con **Ionic + Vue 3 + TypeScript**, empaquetable en iOS/Android con Capacitor. Permite gestionar mascotas, su actividad, historial médico y eventos desde una interfaz pensada primero para móvil.

**¿Qué demuestra este proyecto?**

- Diseño responsive real: la interfaz cambia de layout (no solo de tamaño) según el ancho de pantalla, con un carrusel Swiper en escritorio y una lista apilada en móvil
- Integración de un mapa interactivo (Leaflet) con geocodificación en tiempo real vía Nominatim/OpenStreetMap para seleccionar ubicaciones en el historial médico
- Empaquetado multiplataforma con Capacitor (App, Haptics, Keyboard, Status Bar) para ejecutar la misma base de código como app nativa
- Sistema de navegación con tabs y rutas anidadas (Ionic Vue Router) para cada sección: mascotas, actividad, historial médico, eventos, perfil y notificaciones
- Componentes reutilizables tipados con TypeScript (`CardMascota`, `CardLista`, `NotificationItem`) parametrizados por props

| | |
|---|---|
| Demo | [vuepetcaremanager.netlify.app](https://vuepetcaremanager.netlify.app/) |

> El login no valida usuario y contraseña: pulsa directamente "Iniciar Sesión" sin rellenar los campos para entrar a la app.

---

## Funcionalidades

| Módulo | Descripción |
|---|---|
| **Login / Registro** | Acceso y alta de nuevos usuarios |
| **Mascotas** | Alta, ficha y listado de mascotas con foto, raza y fecha de nacimiento |
| **Actividad** | Registro de actividades por mascota (alta, detalle y listado) |
| **Historial médico** | Intervenciones con fecha, archivo adjunto y ubicación seleccionada en mapa interactivo |
| **Eventos** | Alta, detalle y listado de eventos asociados a las mascotas |
| **Perfil** | Edición de datos, cambio de contraseña y cambio de foto de perfil |
| **Notificaciones** | Centro de notificaciones con estado leído/no leído |

---

## Stack técnico

**Framework** — Vue 3 (Composition API + `<script setup>`) · Ionic 8 · TypeScript · Vite

**Mapas y geolocalización** — Leaflet · Nominatim (OpenStreetMap) para geocodificación

**Carrusel** — Swiper (vista de escritorio)

**Mobile-ready** — Capacitor (App, Haptics, Keyboard, Status Bar)

**Testing** — Vitest (unitario) · Cypress (e2e)

---

## Arquitectura

```
src/
├── components/     # CardMascota, CardLista, CardElemento, NotificationItem, Mapa, Encabezado
├── views/          # Login, Registro, Home, Actividad, HistorialMedico, Eventos, Perfil, Notificaciones
├── router/         # Rutas anidadas bajo /petcaremanager con Ionic Vue Router
└── theme/          # Variables de estilo Ionic
```

---

## Retos técnicos resueltos

**Layout dual mobile/escritorio** — La vista principal detecta el ancho de pantalla con un listener de `resize` y renderiza dos estructuras distintas: lista apilada en móvil y carrusel Swiper con paginación en escritorio, en vez de depender solo de CSS responsive.

**Selección de ubicación en mapa** — El componente `Mapa.vue` inicializa un mapa Leaflet, geocodifica una dirección de texto contra la API de Nominatim y permite además hacer clic sobre el mapa para capturar coordenadas y devolverlas a la vista de historial médico.

**Confirmaciones antes de acciones destructivas** — Las acciones de eliminar (foto de perfil, mascota) pasan por un `ion-alert` de confirmación antes de ejecutarse, evitando borrados accidentales.

---

## Instalación y puesta en marcha

### Prerrequisitos

- Node.js y npm

### Pasos

```bash
git clone https://github.com/Fernandodg97/PetCareManager.git
cd PetCareManager
npm install
npm run dev
```

Disponible en `http://localhost:5173`.

### Otros comandos

```bash
npm run build       # build de producción
npm run test:unit   # tests unitarios (Vitest)
npm run test:e2e    # tests end-to-end (Cypress)
```

---

## Autor

| | |
|---|---|
| **Fernando Diaz** | [github.com/Fernandodg97](https://github.com/Fernandodg97) |

---

## Licencia

[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es)
