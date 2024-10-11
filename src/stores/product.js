import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  // Lista original de productos
  const arrayProduct = ref([]);
  // Carrito de compra
  const currentCart = ref([]);
  // Valor de la búsqueda
  const searchQuery = ref('');

  // Endpoint Base
  const baseURL = 'http://localhost:8080/api/products';

  // Función para crear productos (POST)
  async function createProduct(product) {
    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
      const newProduct = await response.json();
      arrayProduct.value.push(newProduct); // Agregar el nuevo producto a la lista
    } catch (error) {
      console.error('Error al crear el producto:', error);
    }
  }

  // Función para buscar productos desde el API (GET)
  async function fetchProduct() {
    try {
      const response = await fetch(baseURL);
      const products = await response.json();
      arrayProduct.value = products;

      // Inicializar cantidad en cero para cada producto
      arrayProduct.value.forEach(product => {
        product.quantity = 0;
      });
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  }

  // Función para filtrar productos según el valor de búsqueda
  const filteredProducts = computed(() => {
    if (searchQuery.value === '') {
      return arrayProduct.value; // Si no hay búsqueda, mostrar todos los productos
    } else {
      return arrayProduct.value.filter(product =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    }
  });

  // Función para añadir productos al carrito
  function addToChart(product) {
    const existingProduct = currentCart.value.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1; // Aumentar cantidad si ya existe en el carrito
    } else {
      currentCart.value.push({ ...product, quantity: 1 }); // Agregar nuevo producto con cantidad 1
    }
    console.log('Carrito:', currentCart.value); // Ver el estado del carrito en consola
  }

  return {
    arrayProduct,
    currentCart,
    searchQuery,
    createProduct,
    fetchProduct,
    filteredProducts,
    addToChart
  }
});
