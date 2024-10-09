import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  let arrayProduct = ref([])
  let currentCart = ref([])

  //Endpoint Base
  const baseURL = 'http://localhost:8080/api/products'

  async function createProduct(product) {
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    const newProduct = await response.json()

    arrayProduct.value.push(newProduct) // Actualizar la lista de productos
  }

  function confirmBuy() {
    console.log('confirm buy')
  }

  function addToChart(product) {
    currentCart.value.push(product)
    console.log(currentCart.value)
  }

  async function fetchProduct() {
    const response = await fetch(baseURL)
    const products = await response.json()
    arrayProduct.value = products

    arrayProduct.value.forEach(product => {
      product.quantity = 0;
    });
    
  }

  return { arrayProduct, currentCart, createProduct, confirmBuy, addToChart, fetchProduct }
})
