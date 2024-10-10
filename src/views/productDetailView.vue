<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" alt="" />
    <p>{{ product.description }}</p>
    <p>Precio: {{ product.price }} €</p>
  </div>
  <div v-else>
    <p>Producto no encontrado</p>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useProductStore } from '@/stores/product';

export default {
  props: ['id'],
  setup(props) {
    const productStore = useProductStore();

    onMounted(async () => {
      if (!productStore.arrayProduct.length) {
        await productStore.fetchProduct(); // Asegúrate de que los productos se carguen antes de buscar
      }
      console.log('Array de productos:', productStore.arrayProduct);  // Depuración
      console.log('ID del producto recibido:', props.id);  // Depuración
    });

    const product = computed(() => {
      // Asegúrate de que el ID esté siendo comparado correctamente (número a número)
      const productId = parseInt(props.id, 10);  // Convierte el ID recibido en número
      return productStore.arrayProduct.find(p => p.id === productId);
    });

    return {
      product,
    };
  },
};


</script>
