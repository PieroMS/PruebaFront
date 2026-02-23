<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/productStore'

const store = useProductStore()

onMounted(() => {
  store.fetchProducts()
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 py-10 px-6">
    <div class="max-w-7xl mx-auto">

      <h1 class="text-4xl font-extrabold text-rose-600 mb-10 text-center">
        🛍️ Nuestros Productos
      </h1>

      <div 
        v-if="store.loading" 
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <div
          v-for="n in 8"
          :key="n"
          class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-md p-5 animate-pulse"
        >
          <div class="h-40 bg-rose-100 rounded-xl mb-4"></div>
          <div class="h-4 bg-rose-100 rounded w-3/4 mb-2"></div>
          <div class="h-4 bg-rose-100 rounded w-1/2"></div>
        </div>
      </div>

      <div
        v-if="store.error"
        class="bg-rose-100 text-rose-600 p-4 rounded-xl text-center shadow"
      >
        {{ store.error }}
      </div>

      <div
        v-if="!store.loading"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        <div
          v-for="product in store.products"
          :key="product.id"
          class="bg-white/90 backdrop-blur-sm rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >

          <div class="h-48 bg-rose-50 flex items-center justify-center p-4">
            <img
              v-if="product.image"
              :src="product.image"
              :alt="product.title"
              class="h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div v-else class="text-rose-300">
              Sin imagen
            </div>
          </div>

          <div class="p-6">
            <h2 class="font-semibold text-gray-800 line-clamp-2 min-h-[48px]">
              {{ product.title }}
            </h2>

            <p class="text-xl font-bold text-rose-600 mt-3">
              $ {{ product.price }}
            </p>

            <button
              class="mt-5 w-full bg-rose-500 text-white py-2 rounded-xl hover:bg-rose-600 hover:scale-105 transition-all duration-300"
            >
              Ver producto
            </button>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>