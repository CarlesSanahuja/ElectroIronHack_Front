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
section {
  background-color: #f7f9fc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 40px auto;
  font-family: 'Arial', sans-serif;
}

h2 {
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  letter-spacing: 1.2px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  font-size: 16px;
  color: #00416a;
  margin-bottom: 5px;
  font-weight: bold;
  text-transform: uppercase;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 10px;
  border: 2px solid #00416a;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s ease;
  background-color: #ffffff;
}

input[type="text"]:focus,
input[type="number"]:focus,
textarea:focus {
  border-color: #0077b6;
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button {
  background-color: #00416a;
  color: #fff;
  padding: 12px 20px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  margin-top: 10px;
  font-weight: bold;
}

button:hover {
  background-color: #0077b6;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

button:active {
  background-color: #003f5c;
}

div {
  display: flex;
  flex-direction: column;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  section {
    padding: 15px;
    margin: 20px;
  }

  h2 {
    font-size: 24px;
  }

  button {
    font-size: 16px;
    padding: 10px 15px;
  }
}

</style>
