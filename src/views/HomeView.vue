<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToProducts() {
  router.push({ name: 'productos' })
}

function goToCategories() {
  router.push({ name: 'categories' })
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 flex flex-col items-center justify-center text-center px-6">

    <div class="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-12 max-w-2xl">

      <h1 class="text-4xl md:text-5xl font-extrabold text-rose-600 mb-6">
        Bienvenido a Vue Product App 💖
      </h1>

      <p class="text-gray-600 text-lg mb-10 leading-relaxed">
        Aplicación desarrollada con Vue 3, Pinia, Vue Router, Axios y Tailwind.
        Explora productos y categorías consumiendo una API externa.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">

        <button
          @click="goToProducts"
          class="bg-rose-500 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-rose-600 hover:scale-105 transition-all duration-300"
        >
          🛍️ Ver Productos
        </button>

        <button
          @click="goToCategories"
          class="bg-pink-200 text-rose-700 px-8 py-3 rounded-xl shadow-md hover:bg-pink-300 hover:scale-105 transition-all duration-300"
        >
          📦 Ver Categorías
        </button>

      </div>

    </div>

  </div>
</template>