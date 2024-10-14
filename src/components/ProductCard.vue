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
      <button class="add-chart" @click="productStore.addToChart(product)">
        Añadir al carrito
      </button>  
    </div>
      
      <!-- Botón para ver la ficha del artículo -->
      <router-link :to="'/product/' + product.id">
        <button class="file">Detalles del producto</button>
      </router-link>
    
  </div>
  
</template>

<style scoped>
.card {
  background-color: #e0f7ff;
  width: 250px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #00416a;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  padding: 15px;
  text-align: center;
  overflow: hidden;
}

.card:hover {
  transform: scale(1.05); /* Aumenta el tamaño ligeramente */
  background-color: #d0efff; /* Cambia el color de fondo */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* Sombra más profunda */
}

.card img {
  width: 100%;
  height: auto;
  max-height: 160px;
  object-fit: contain;
  border-radius: 10px;
  margin-bottom: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card img:hover {
  transform: scale(1.1); /* La imagen aumenta ligeramente */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Sombra más pronunciada */
}

.name {
  font-size: 20px;
  font-weight: bold;
  color: #00416a;
  margin-bottom: 8px;
}

.description {
  width: 90%;
  text-align: center;
  font-size: 14px;
  color: #333;
  margin: 10px 0;
  line-height: 1.4;
  max-height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.price {
  font-size: 16px;
  color: #0077b6;
  font-weight: bold;
  margin-bottom: 10px;
}

.cart_buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

button {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #0077b6;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

button:hover {
  background-color: #005f99;
  transform: scale(1.05); /* Aumenta ligeramente el tamaño del botón */
}

.file {
  background-color: #071e51;
  margin-top: 10px;
}

.file:hover {
  background-color: #090404;
}

@media (max-width: 768px) {
  .card {
    width: 100%;
    max-width: 320px;
  }
}


</style>
