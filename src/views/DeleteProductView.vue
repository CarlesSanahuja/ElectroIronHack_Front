<template>
    <section class="delete-product">
      <h2>Delete Product</h2>
      <form @submit.prevent="handleDelete">
        <div class="input-group">
          <label for="productId">Product ID:</label>
          <input
            v-model="productId"
            type="number"
            id="productId"
            placeholder="Enter product ID"
            required
          />
        </div>
  
        <button type="submit" class="btn-delete">Delete Product</button>
      </form>
  
      <p v-if="message" class="message">{{ message }}</p>
    </section>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'DeleteProductView',
    setup() {
      const productId = ref('');
      const message = ref('');
  
      // Function to handle the delete request
      const handleDelete = async () => {
        try {
          const response = await fetch(`http://localhost:8080/api/products/${productId.value}`, {
            method: 'DELETE',
          });
  
          if (response.status === 204) {
            message.value = `Product with ID ${productId.value} has been deleted successfully.`;
          } else {
            message.value = `Failed to delete product with ID ${productId.value}.`;
          }
        } catch (error) {
          message.value = `Error: ${error.message}`;
        }
  
        // Clear the input field after deletion
        productId.value = '';
      };
  
      return {
        productId,
        handleDelete,
        message,
      };
    },
  };
  </script>
  
  <style scoped>
  .delete-product {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 2px solid #e04848;
    border-radius: 8px;
    background-color: #ffebeb;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .input-group {
    margin-bottom: 15px;
  }
  
  input[type='number'] {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #e04848;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s ease;
  }
  
  input[type='number']:focus {
    border-color: #c72c2c;
  }
  
  .btn-delete {
    background-color: #ff6b6b;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-delete:hover {
    background-color: #e04848;
  }
  
  .message {
    margin-top: 20px;
    color: #00416a;
    font-weight: bold;
  }
  </style>
  