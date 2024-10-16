import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/ProductView.vue'
import CreatorView from '@/views/CreatorView.vue'
import ChartView from '@/views/ChartView.vue'
import ProductDetailView from '@/views/productDetailView.vue'
import HomeView from '@/views/HomeView.vue'
import DeleteProductView from '@/views/DeleteProductView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/creator',
      name: 'creator',
      component: CreatorView
    },
    {
      path: '/chart',
      name: 'chart',
      component: ChartView
    },
    {
      path: '/product/:id',  // Nueva ruta dinámica para la ficha del producto
      name: 'productDetail',
      component: ProductDetailView,
      props: true // Permite pasar el parámetro 'id' como prop a la vista
    },
    {
      path: '/products',
      name: 'products',
      component: ProductView
    },
    {
      path: '/delete-product',  // Nueva ruta para eliminar productos
      name: 'deleteProduct',
      component: DeleteProductView,
    }
  ]
})

export default router
