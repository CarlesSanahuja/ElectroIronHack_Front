<script setup>
import ProductCard from '@/components/ProductCard.vue'
import ProductCardCart from '@/components/ProductCardCart.vue';
import { useProductStore } from '@/stores/product'
import { computed, ref } from 'vue'

const productStore = useProductStore()

const productsInChart = ref(productStore.currentCart)

const finalPrice = computed(() => {
  let result = 0
  productsInChart.value.forEach((product) => {
    console.log(product.quantity)
    console.log(product.price)

    result += product.quantity * product.price
  })
  return result
})
// Eliminar un artículo específico del carrito
const removeProduct = (productId) => {
  productsInChart.value = productsInChart.value.filter(product => product.id !== productId)
  // Si el carrito está gestionado en el store (pinia), actualízalo también
  productStore.setCart(productsInChart.value)
}

// Vaciar todo el carrito
const clearCart = () => {
  productsInChart.value = []
  productStore.setCart(productsInChart.value)  // Actualizar el store si es necesario
}
</script>

<template>
  <section>
    <article>
      <h2>PRODUCTOS COMPRADOS</h2>
      <!-- Renderizado de cada producto -->
      <ProductCardCart
        v-for="product in productsInChart"
        :key="product.id"
        :product="product"
      >
        <!-- Botón para eliminar producto -->
        <button @click="removeProduct(product.id)" class="btn-remove">Eliminar</button>
      </ProductCardCart>
    </article>
    
  </section>
  <div class="shopping-cart">
        <h1>Carrito de la Compra</h1>
        

        <!-- Total -->
        <div class="cart-total">
            <h2>Total de la compra: {{ finalPrice }}</h2>
        </div>

        <!-- Botones de acción -->
        <div class="cart-actions">
          <button @click="clearCart" class="btn-clear">Vaciar Carrito</button>
            <button class="btn-checkout">Proceder al Pago</button>
        </div>
    </div>
</template>

<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.shopping-cart {
    width: 80%;
    max-width: 900px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.cart-item {
    display: flex;
    border-bottom: 1px solid #ddd;
    padding: 20px 0;
}

.product-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
}

.product-details {
    margin-left: 20px;
    flex: 1;
}

.product-name {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.product-description {
    margin-bottom: 10px;
}

.product-quantity {
    margin-bottom: 10px;
}

.product-quantity input {
    width: 50px;
    padding: 5px;
    font-size: 1em;
}

.product-price {
    font-weight: bold;
}

.cart-total {
    text-align: right;
    margin-top: 20px;
}

.cart-total h2 {
    font-size: 1.5em;
}

.cart-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.cart-actions button {
    padding: 10px 20px;
    font-size: 1em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-clear {
    background-color: #f44336;
    color: white;
}

.btn-checkout {
    background-color: #4CAF50;
    color: white;
}

.btn-clear:hover {
    background-color: #d32f2f;
}

.btn-checkout:hover {
    background-color: #388E3C;
}

</style>
