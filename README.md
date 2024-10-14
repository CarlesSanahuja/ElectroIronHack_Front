# Tienda Online de Electrodomésticos (Proyecto Vue.js)

Este proyecto es una tienda online de electrodomésticos desarrollada con **Vue.js**. La aplicación permite a los usuarios ver productos, agregarlos a un carrito de compras, crear nuevos productos (para administradores), buscar productos por nombre y eliminar productos por su ID. Además, se incluye una vista para ver los detalles completos de cada producto.

## Estructura del Proyecto

El proyecto está organizado en los siguientes componentes clave, vistas y utilidades:

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

El store gestiona el estado de los productos, proporcionando funciones como agregar productos al carrito, eliminar productos y buscar productos. Este store está implementado utilizando **Vuex** o **Pinia**.

- **addToChart(product)**: Agrega un producto al carrito.
- **removeProduct(id)**: Elimina un producto por su ID.
- **getAllProducts()**: Recupera todos los productos desde la API.
- **searchProduct(query)**: Busca productos por nombre.

### Router (`router/index.js`)

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
    },
  ],
});

export default router;
