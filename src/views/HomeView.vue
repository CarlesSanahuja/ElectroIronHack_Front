<script setup>

</script>

<template>
  <router-link to="/products" class="home">
    <img src="../assets/banner1.png" alt="Banner" class="responsive-banner">
  </router-link>
</template>

<style scoped>
img{
margin-top: 20px;
}
.responsive-banner {
  width: 100%;           /* La imagen ocupará el 100% del ancho del contenedor */
  height: auto;          /* Mantiene la proporción de la imagen */
  max-width: 100vw;      /* Asegura que no sea más ancha que la ventana de visualización */
  max-height: 100vh;     /* Asegura que no sea más alta que la ventana */
  object-fit: cover;     /* Asegura que la imagen cubra su contenedor correctamente */
  border-radius: 10px;   /* Opcional: Bordes redondeados */
}


</style>
