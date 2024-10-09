<script setup>
import { ref, defineProps } from 'vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()

const props = defineProps({
  product: {
    type: Object,
    Required: true
  }
})

const product = ref(props.product)
</script>

<template>
  <div class="card">
    <p class="name">{{ product.name }}</p>
    <p>{{ product.description }}</p>
    <img :src="product.image" alt="" />
    <p>Precio: {{ product.price }}€</p>
    <article>
      <button @click="product.quantity++">+</button>
      <button @click="product.quantity--">-</button>
      <button class="add-chart" @click="productStore.addToChart(product)">
        Añadir {{ product.quantity }} al carro
      </button>  
    </article> 
  </div>
  
</template>

<style scoped>
.card {
  background-color: #85d0ff;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #00416a;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
}

p {
  width: 80%;
  text-align: center;
  margin: 7px 0;
  max-height: 10%;
  min-height: 10%;
}

img {
  max-width: 100%;
  max-height: 45%;
}

button {
  width: 30px;
  border-radius: 5px;
}

.add-chart {
  width: 120px;
  margin: 0 5px;
}
.name{
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
