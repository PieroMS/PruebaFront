import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue'
import CategoriesView from '@/views/CategoriesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/productos',
    name: 'productos',
    component: ProductsView,
  },
  {
    path: '/categorias',
    name: 'categories',
    component: CategoriesView,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})