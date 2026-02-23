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
  const products = await categoryStore.filterProductsByCategory(category)
  productStore.products = products
}
</script>

<template>
  <div class="mb-6">
    <h2 class="font-semibold mb-2">Filtrar por categoría</h2>

    <div v-if="categoryStore.loading">Cargando categorías...</div>

    <div class="flex flex-wrap gap-2">
      <button
        v-for="cat in categoryStore.categories"
        :key="cat"
        @click="selectCategory(cat)"
        class="bg-gray-200 px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition"
      >
        {{ cat }}
      </button>
    </div>

    <p v-if="categoryStore.error" class="text-red-500 mt-2">
      {{ categoryStore.error }}
    </p>
  </div>
</template>