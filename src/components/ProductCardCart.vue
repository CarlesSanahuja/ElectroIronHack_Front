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
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f4f8;
  padding: 20px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
}

.cart-item img {
  width: 150px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.product-details {
  flex-grow: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-name {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.product-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.product-quantity,
.product-price {
  font-size: 16px;
  color: #00416a;
  margin-bottom: 10px;
  font-weight: bold;
}

article {
  display: flex;
  gap: 10px;
}

article button {
  background-color: #0077b6;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
}

article button:hover {
  background-color: #005f8c;
}

article button:active {
  transform: scale(0.95);
}

article button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Ajustes responsivos */
@media (max-width: 768px) {
  .cart-item {
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
  }

  .cart-item img {
    width: 100%;
    margin-bottom: 15px;
  }

  .product-details {
    margin-left: 0;
  }

  article {
    justify-content: flex-start;
    width: 100%;
  }
}

</style>
