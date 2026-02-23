<script setup>
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/categoryStore'
import { useProductStore } from '@/stores/productStore'

const categoryStore = useCategoryStore()
const productStore = useProductStore()

onMounted(() => {
  categoryStore.fetchCategories()
})

async function selectCategory(category) {
  categoryStore.selectedCategory = category
  const products = await categoryStore.filterProductsByCategory(category)
  productStore.products = products
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 py-10 px-6">
    <div class="max-w-7xl mx-auto">

      <h1 class="text-4xl font-extrabold text-rose-600 mb-10 text-center">
        Categorías
      </h1>

      <div v-if="categoryStore.loading" class="text-center text-rose-500">
        Cargando categorías...
      </div>

      <div
        v-if="categoryStore.error"
        class="bg-rose-100 text-rose-600 p-4 rounded-xl text-center shadow"
      >
        {{ categoryStore.error }}
      </div>

      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="cat in categoryStore.categories"
          :key="cat"
          @click="selectCategory(cat)"
          class="px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md"
          :class="[
            categoryStore.selectedCategory === cat
              ? 'bg-rose-500 text-white shadow-lg scale-105'
              : 'bg-white text-rose-600 hover:bg-rose-100'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <div v-if="productStore.products.length">

        <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">
          Productos de 
          <span class="text-rose-600">
            {{ categoryStore.selectedCategory }}
          </span>
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          <div
            v-for="product in productStore.products"
            :key="product.id"
            class="bg-white/90 backdrop-blur-sm rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
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
              <h3 class="font-semibold text-gray-800 line-clamp-2 min-h-[48px]">
                {{ product.title }}
              </h3>

              <p class="text-xl font-bold text-rose-600 mt-3">
                $ {{ product.price }}
              </p>

              <button
                class="mt-5 w-full bg-rose-500 text-white py-2 rounded-xl hover:bg-rose-600 hover:scale-105 transition-all duration-300"
              >
                Ver más
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</template>