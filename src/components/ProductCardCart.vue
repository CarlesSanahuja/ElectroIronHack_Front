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

    <div class="cart-item">
        <img :src="product.image" alt="" />
            <div class="product-details">
                <h2 class="product-name">{{ product.name }}</h2>
                <p class="product-description">{{ product.description }}</p>
                <p class="product-quantity">Cantidad: {{ product.quantity }}</p>
                <p class="product-price">{{ product.price }}€</p>
                <article>
                    <button @click="product.quantity++">+</button>
                    <button @click="product.quantity--">-</button>
                </article> 
                <slot></slot>
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
