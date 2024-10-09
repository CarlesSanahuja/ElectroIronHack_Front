<script setup>
import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()
productStore.fetchProduct()
</script>

<template>
  <section class="product-show">
    <ProductCard
      class="margin"
      v-for="product in productStore.arrayProduct"
      :product="product"
    ></ProductCard>
  </section>
</template>

<style scoped>
.product-show {
  display: flex;
  flex-wrap: wrap;
}

.margin {
  margin: 10px;
}
</style>
