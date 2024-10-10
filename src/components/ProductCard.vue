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
    <p class="description">{{ product.description }}</p>
    <img :src="product.image" alt="" />
    <p class="price">Precio: {{ product.price }}€</p>
    <div class="cart_buttons">
      <button @click="product.quantity++">+</button>
      <button @click="product.quantity--">-</button>
      <button class="add-chart" @click="productStore.addToChart(product)">
        Añadir {{ product.quantity }} al carro
      </button>  
    </div>
      
      <!-- Botón para ver la ficha del artículo -->
      <router-link :to="'/product/' + product.id">
        <button class="file">Ver Ficha del Artículo</button>
      </router-link>
    
  </div>
  
</template>

<style scoped>
.card {
  background-color: #85d0ff;
  width: 250px;
  height: 365px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #00416a;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.card:hover {
  transform: scale(1.05); /* Aumenta el tamaño ligeramente */
  background-color: #6fb9e6; /* Cambia el color de fondo ligeramente más oscuro */
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.5); /* Sombra más pronunciada */
}

.description {
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
.file{
  width: 100px;
}
.price{
  margin-bottom: 10px;
}
.cart_buttons{
  margin-bottom: 10px;
}
.name{
  margin-top: 5px;
}
</style>
