<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" alt="" />
    <p>{{ product.description }}</p>
    <p>Precio: {{ product.price }} €</p>
    <p>Descripción detallada:{{ product.longDescription }}</p>
  </div>
  <div v-else>
    <p>Producto no encontrado</p>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useProductStore } from '@/stores/product';

export default {
  props: ['id'],
  setup(props) {
    const productStore = useProductStore();

    onMounted(async () => {
      if (!productStore.arrayProduct.length) {
        await productStore.fetchProduct(); // Asegúrate de que los productos se carguen antes de buscar
      }
      console.log('Array de productos:', productStore.arrayProduct);  // Depuración
      console.log('ID del producto recibido:', props.id);  // Depuración
    });

    const product = computed(() => {
      // Asegúrate de que el ID esté siendo comparado correctamente (número a número)
      const productId = parseInt(props.id, 10);  // Convierte el ID recibido en número
      return productStore.arrayProduct.find(p => p.id === productId);
    });

    return {
      product,
    };
  },
};
</script>
<style scoped>
/* Estilos generales para el contenedor del producto */
div {
  margin: 20px auto;
  padding: 20px;
  max-width: 700px;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

div:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

/* Estilo para el título del producto */
h1 {
  font-size: 2em;
  color: #00416a;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  border-bottom: 2px solid #85d0ff;
  padding-bottom: 10px;
  transition: color 0.3s ease;
}

h1:hover {
  color: #0077b6;
}

/* Estilos para la imagen del producto */
img {
  display: block;
  max-width: 60%;
  height: auto;
  border-radius: 10px;
  margin: 0 auto 20px auto;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

img:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Estilos para la descripción y el precio */
p {
  font-size: 1.1em;
  color: #333;
  line-height: 1.6;
  margin-bottom: 15px;
  transition: color 0.3s ease;
}

p:hover {
  color: #555;
}

/* Estilo especial para el precio */
p:nth-child(4) {
  font-size: 1.4em;
  font-weight: bold;
  color: #009688;
  margin-top: 15px;
  text-align: center;
  border-top: 2px solid #85d0ff;
  padding-top: 10px;
}

/* Estilo para la descripción detallada */
p:nth-child(5) {
  font-style: italic;
  color: #666;
  text-align: justify;
  padding: 15px;
  background-color: #f1f1f1;
  border-radius: 10px;
  box-shadow: inset 0 3px 10px rgba(0, 0, 0, 0.05);
}

/* Estilo cuando no se encuentra producto */
div p {
  font-size: 1.2em;
  text-align: center;
  color: #e74c3c;
  font-weight: bold;
}

@media (max-width: 768px) {
  div {
    padding: 15px;
  }

  h1 {
    font-size: 1.8em;
  }

  p {
    font-size: 1em;
  }

  p:nth-child(4) {
    font-size: 1.3em;
  }
}

</style>
