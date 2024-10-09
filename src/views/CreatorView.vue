<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()

const name = ref('')
const description = ref('')
const image = ref('')
const stock = ref(0)
const price = ref(0)

// Aquí puedes agregar la función para manejar el submit del formulario
const handleSubmit = (e) => {
  e.preventDefault()
  // Lógica para enviar los datos del formulario, por ejemplo, a una API
  const newProduct = {
    name: name.value,
    description: description.value,
    image: image.value,
    stock: stock.value,
    price: price.value
  }
  productStore.createProduct(newProduct)
}
</script>

<template>
  <section>
    <h2>Product Creator</h2>
    <form @submit="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input v-model="name" type="text" id="name" placeholder="Enter product name" required />
      </div>

      <div>
        <label for="description">Description:</label>
        <textarea
          v-model="description"
          id="description"
          placeholder="Enter product description"
          required
        ></textarea>
      </div>

      <div>
        <label for="image">Image URL:</label>
        <input v-model="image" type="text" id="image" placeholder="Enter image URL" required />
      </div>

      <div>
        <label for="stock">Stock:</label>
        <input
          v-model="stock"
          type="number"
          id="stock"
          min="0"
          placeholder="Enter stock quantity"
          required
        />
      </div>

      <div>
        <label for="price">Price:</label>
        <input
          v-model="price"
          type="number"
          id="price"
          min="0"
          step="0.01"
          placeholder="Enter product price"
          required
        />
      </div>

      <div>
        <button type="submit">Create Product</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
  margin: 0 auto;
}

label {
  font-weight: bold;
}

input,
textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
