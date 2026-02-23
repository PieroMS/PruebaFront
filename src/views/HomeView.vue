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
        Bienvenido a Tiendita 💖
      </h1>

      <p class="text-gray-600 text-lg mb-10 leading-relaxed">
        Web que lista productos y categorías
      </p>

    </div>

  </div>
</template>