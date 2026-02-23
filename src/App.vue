<script setup>
import { RouterView, RouterLink } from 'vue-router'

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200">

    <nav class="bg-white/80 backdrop-blur-md shadow-md border-b border-rose-200">
      <div class="container mx-auto flex justify-between items-center p-4">

        <RouterLink 
          to="/" 
          class="font-extrabold text-xl text-rose-600 hover:text-rose-700 transition"
        >
          💖 Tiendita
        </RouterLink>

        <div class="flex gap-4">

          <RouterLink 
            to="/" 
            class="px-4 py-2 rounded-full text-gray-700 hover:bg-rose-100 transition"
            active-class="bg-rose-500 text-white shadow-md"
          >
            Inicio
          </RouterLink>

          <RouterLink 
            to="/productos" 
            class="px-4 py-2 rounded-full text-gray-700 hover:bg-rose-100 transition"
            active-class="bg-rose-500 text-white shadow-md"
          >
            Productos
          </RouterLink>

          <RouterLink 
            to="/categorias" 
            class="px-4 py-2 rounded-full text-gray-700 hover:bg-rose-100 transition"
            active-class="bg-rose-500 text-white shadow-md"
          >
            Categorías
          </RouterLink>

        </div>

      </div>
    </nav>

    <main class="flex-1 container mx-auto p-6">
      <RouterView />
    </main>

    <footer class="bg-rose-600 text-rose-100 text-center py-5 mt-10 shadow-inner">
      <div class="container mx-auto text-sm">
        © {{ currentYear }} Marilyn Jhamile 💕  
        Desarrollado por Marilyn :p
      </div>
    </footer>

  </div>
</template>