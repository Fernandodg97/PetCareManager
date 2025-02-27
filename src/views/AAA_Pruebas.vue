<!-- Critica constructiva: La existencia de esta pagina demuestra que: VUE.js es una mierda o que nos lo han enseñado fatal -->
<!-- TabsPage -->
<template>
    <ion-page>
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-xl="4">
            <ion-tabs>
              <ion-router-outlet></ion-router-outlet>
  
              <!-- <ion-tab-bar slot="bottom" class="custom-tab-bar-pc"> css utilitis: https://ionicframework.com/docs/layout/css-utilities#element-display-->
              <!-- Hacer que al pasar la vista a pc el menu bar se oculte y se vea el de pc clase .ion-hide -->
  
              <ion-tab-bar slot="bottom" class="custom-tab-bar">
                <ion-tab-button tab="actividad" href="/petcaremanager/actividad">
                  <img src="../assets/new_releases.png" alt="Actividad" class="image" />
                  <ion-label>Actividad</ion-label>
                </ion-tab-button>
  
                <ion-tab-button tab="historialmedico" href="/petcaremanager/historialmedico">
                  <img src="../assets/add_box.png" alt="Historial Medico" class="image" />
                  <ion-label>Historial</ion-label>
                </ion-tab-button>
  
                <ion-tab-button tab="home" href="/petcaremanager/home">
                  <img src="../assets/home.png" alt="Home" class="image" />
                  <ion-label>Home</ion-label>
                </ion-tab-button>
  
                <ion-tab-button tab="eventos" href="/petcaremanager/eventos">
                  <img src="../assets/event.png" alt="Eventos" class="image" />
                  <ion-label>Eventos</ion-label>
                </ion-tab-button>
  
                <ion-tab-button tab="perfil" href="/petcaremanager/perfil">
                  <!-- Foto redonda en lugar de icono -->
                  <img src="../assets/f1.png" alt="Foto de perfil" class="image profile" />
                  <ion-label>Perfil</ion-label>
                </ion-tab-button>
              </ion-tab-bar>
  
              <!-- Renderiza las rutas de las páginas dentro de los tabs -->
              <ion-router-outlet />
  
            </ion-tabs>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-page>
  </template>