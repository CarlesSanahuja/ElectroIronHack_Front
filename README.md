# Tienda Online de Electrodomésticos (Proyecto Vue.js)

Este proyecto es una tienda online de electrodomésticos desarrollada con **Vue.js**. La aplicación permite a los usuarios ver productos, agregarlos a un carrito de compras, crear nuevos productos (para administradores), buscar productos por nombre y eliminar productos por su ID. También se incluye una vista para ver los detalles completos de cada producto.

## Estructura del Proyecto

### Componentes

1. **FooterComponent**  
   Componente que renderiza el pie de página de la aplicación, con enlaces e información relevante para los usuarios.

2. **HeaderComponent**  
   Muestra la barra de navegación principal con enlaces a las diferentes vistas, como el listado de productos, el carrito, el creador de productos y la barra de búsqueda.

3. **ProductCard**  
   Componente que representa un producto individual en el listado. Incluye la imagen, nombre, descripción, precio y botones para agregar el producto al carrito o ver sus detalles.

4. **ProductCardCart**  
   Similar a `ProductCard`, pero utilizado en la vista del carrito para mostrar productos agregados, permitiendo ajustar la cantidad o eliminarlos.

### Store (`stores/product.js`)

El store gestiona el estado de los productos, proporcionando funciones como agregar productos al carrito, eliminar productos y buscar productos. Este store está implementado utilizando **Pinia**.

- **addToChart(product)**: Agrega un producto al carrito.
- **removeProduct(id)**: Elimina un producto por su ID.
- **getAllProducts()**: Recupera todos los productos desde la API.
- **searchProduct(query)**: Busca productos por nombre.

### Rutas (`router/index.js`)

Este archivo maneja las rutas de la aplicación, permitiendo a los usuarios navegar entre las diferentes vistas.

```javascript
import { createRouter, createWebHistory } from 'vue-router';
import ProductView from '../views/ProductView.vue';
import CreatorView from '@/views/CreatorView.vue';
import ChartView from '@/views/ChartView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';
import HomeView from '@/views/HomeView.vue';
import DeleteProductView from '@/views/DeleteProductView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/creator',
      name: 'creator',
      component: CreatorView,
    },
    {
      path: '/chart',
      name: 'chart',
      component: ChartView,
    },
    {
      path: '/product/:id',
      name: 'productDetail',
      component: ProductDetailView,
      props: true,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView,
    },
    {
      path: '/delete-product',
      name: 'deleteProduct',
      component: DeleteProductView,
    }
  ]
});

export default router;
Vistas
HomeView
Página principal de la aplicación, que puede mostrar productos destacados o información relevante de la tienda.

ProductView
Vista que muestra una lista de todos los productos disponibles en la tienda, con una barra de búsqueda para filtrar productos por nombre.

ProductDetailView
Muestra detalles completos de un producto específico, incluyendo imagen, descripción, precio, cantidad en stock y más.

CartView
Vista del carrito de compras. Los usuarios pueden ver todos los productos agregados, ajustar cantidades y eliminar productos del carrito.

CreatorView
Formulario para agregar nuevos productos. Está destinado a administradores o usuarios con permisos especiales para la gestión de inventario.

DeleteProductView
Vista que permite eliminar un producto ingresando su ID.

App.vue
El archivo principal de la aplicación Vue organiza los componentes globales y gestiona el enrutamiento con el <router-view>. Este archivo integra el encabezado, pie de página y el contenido principal.

html
Copiar código
<script setup>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <section class="big-frame">
    <HeaderComponent />
    <main>
      <RouterView />
    </main>
    <FooterComponent />
  </section>
</template>
Funcionalidades Clave
Barra de búsqueda
En la vista ProductView, los usuarios pueden buscar productos por nombre utilizando un campo de entrada. La búsqueda se actualiza en tiempo real, mostrando productos que coincidan con el criterio de búsqueda.

Carrito de compras
Los productos pueden ser agregados al carrito desde la lista de productos o desde la página de detalles del producto. En la vista del carrito, los usuarios pueden ver los productos agregados, ajustar cantidades y eliminar productos del carrito.

Gestión de productos
Los administradores pueden agregar nuevos productos mediante la vista de creación (CreatorView) o eliminarlos ingresando el ID en la vista de eliminación (DeleteProductView).

Vista de detalles del producto
Los usuarios pueden ver detalles específicos de un producto, como la descripción, precio y stock disponible, navegando a la página de detalles desde el listado de productos.

Instalación y Configuración
Sigue los siguientes pasos para instalar y configurar el proyecto en tu entorno local:

Clona el repositorio:

bash
Copiar código
git clone <url-del-repositorio>
cd <directorio-del-proyecto>
Instala las dependencias:

bash
Copiar código
npm install
Ejecuta el servidor de desarrollo:

bash
Copiar código
npm run dev
Compila para producción:

bash
Copiar código
npm run build
Ejecuta el servidor en producción:

bash
Copiar código
npm run serve
Rutas de la Aplicación
/: Página principal (HomeView)
/products: Lista de productos con barra de búsqueda (ProductView)
/product/:id: Detalles de un producto (ProductDetailView)
/creator: Formulario para crear nuevos productos (CreatorView)
/chart: Carrito de compras (CartView)
/delete-product: Eliminar producto por ID (DeleteProductView)
Integración con la API
Este proyecto se conecta a una API para la gestión de productos. Las principales rutas de la API son:

GET /api/products: Obtiene todos los productos.
POST /api/products: Crea un nuevo producto.
DELETE /api/products/{id}: Elimina un producto por su ID.
Mejoras Futuras
Algunas mejoras que se pueden implementar en el futuro incluyen:

Autenticación: Añadir un sistema de autenticación para separar las funcionalidades entre usuarios comunes y administradores.
Gestión de pedidos: Implementar la posibilidad de que los usuarios realicen pedidos y puedan hacer seguimiento a los mismos.
Reseñas de productos: Permitir que los usuarios dejen reseñas y calificaciones sobre los productos.
Pagos en línea: Integrar una pasarela de pagos para que los usuarios puedan realizar compras directamente desde la tienda.
