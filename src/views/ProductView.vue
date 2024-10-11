<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/stores/product'
import { computed } from 'vue'

const productStore = useProductStore()

// Asegurarnos de que los productos se cargan al montar el componente
productStore.fetchProduct()

// Computar los productos filtrados según la query de búsqueda
const filteredProducts = computed(() => {
  // Si no hay una búsqueda, devolver todos los productos
  if (!productStore.searchQuery) {
    return productStore.arrayProduct
  }

  // Filtrar los productos según el nombre (puedes cambiar la lógica de filtrado si lo deseas)
  return productStore.arrayProduct.filter(product => 
    product.name.toLowerCase().includes(productStore.searchQuery.toLowerCase())
  )
})
</script>

<template>
  <div class="product-show">
    <!-- Mostrar las tarjetas de productos filtrados -->
    <ProductCard
      class="margin"
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<style scoped>
.product-show {
  display: flex;
    flex-wrap: wrap;
    margin: auto;
    align-content: center;
    align-items: stretch;
    flex-direction: row;
    justify-content: center;
}

.margin {
  margin: 10px;
}
</style>

