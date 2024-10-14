<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'  // Importar useRoute para acceder a la ruta actual
import { useProductStore } from '../stores/product' // Importar el store de productos

// Usar el store de productos
const productStore = useProductStore()

// Detectar la ruta actual
const route = useRoute()

// Mostrar la barra de búsqueda solo si la ruta es "/products"
const isProductView = computed(() => route.path === '/products')
</script>

<template>
  <header class="store-header">
    <div class="logo">
      <img src="../assets/logoIron.png" alt="Logo de la tienda" />
      <h1>ElectroIronHack</h1>
    </div>

    <!-- Barra de búsqueda (se muestra solo en /products) -->
    <div v-if="isProductView" class="search-bar">
      <input
        type="text"
        v-model="productStore.searchQuery"
        placeholder="Search products..."
      />
    </div>

    <nav class="main-nav">
      <ul>
        <li><router-link to="/" class="home">HOME</router-link></li>
        <li><router-link to="/products" class="home">Productos</router-link></li>
        <li><router-link to="/chart">Carrito</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* Ajustes generales del header */
.store-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00416a;
  color: white;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  flex-wrap: wrap; /* Para permitir que los elementos se ajusten en pantallas pequeñas */
}

.logo {
  display: flex;
  align-items: center;
}

img {
  max-width: 50px;
}

.store-header .logo h1 {
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  margin-left: 20px;
}

/* Estilo del menú de navegación */
.main-nav ul {
  display: flex;
  list-style-type: none;
}

.main-nav ul li {
  margin-left: 20px;
}

.main-nav ul li a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  transition: color 0.3s ease;
}

.main-nav ul li a:hover {
  color: #00ccff;
}

/* Estilo de la barra de búsqueda */
.search-bar {
  width: 30%;
  display: flex;
  justify-content: center;
  margin-left: 120px;
}

.search-bar input {
  width: 100%;
  padding: 10px;
  border: 2px solid #00416a;
  border-radius: 25px;
  font-size: 1.1em;
  transition: border-color 0.3s ease;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.search-bar input:focus {
  border-color: #0077b6;
  outline: none;
}

/* Ajustes para pantallas medianas */
@media (max-width: 1024px) {
  .store-header {
    padding-left: 5%;
    padding-right: 5%;
    flex-direction: column; /* Colocar en columnas cuando hay menos espacio */
  }

  .logo {
    margin-bottom: 10px; /* Separación debajo del logo */
  }

  .search-bar {
    width: 60%; /* Aumentar la barra de búsqueda */
    margin-left: 0; /* Quitar margen extra en pantallas medianas */
  }

  .main-nav ul {
    justify-content: center;
    margin-top: 10px;
  }
}

/* Ajustes para pantallas pequeñas (móviles) */
@media (max-width: 768px) {
  .store-header {
    flex-direction: column; /* Colocar todos los elementos en una columna */
    padding-left: 20px;
    padding-right: 20px;
  }

  .logo h1 {
    font-size: 24px; /* Reducir tamaño del logo */
  }

  .search-bar {
    width: 100%; /* Barra de búsqueda ocupa el 100% del ancho */
    margin-left: 0; /* Sin margen a la izquierda */
    margin-top: 10px;
  }

  .search-bar input {
    font-size: 1em;
    padding: 8px; /* Reducir el padding en móviles */
  }

  .main-nav ul {
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
  }

  .main-nav ul li {
    margin: 5px 0; /* Reducir márgenes entre los items del menú */
  }
}

/* Ajustes para pantallas muy pequeñas (menos de 480px) */
@media (max-width: 480px) {
  .logo h1 {
    font-size: 20px; /* Aún más pequeño el logo */
  }

  .search-bar input {
    font-size: 0.9em;
  }

  .main-nav ul {
    padding-top: 5px;
  }
}

</style>
