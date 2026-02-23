import { defineStore } from 'pinia'
import categoryService from '@/services/categoryService'
import productService from '@/services/productService'

export const useCategoryStore = defineStore('categories', {
  state: () => ({
    categories: [],
    selectedCategory: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchCategories() {
      this.loading = true
      this.error = null

      try {
        const data = await categoryService.getAll()
        this.categories = data
      } catch (error) {
        this.error = 'Error al cargar categorías'
      } finally {
        this.loading = false
      }
    },

    async filterProductsByCategory(category) {
      this.selectedCategory = category
      this.loading = true

      try {
        const products = await productService.getByCategory(category)
        return products
      } catch (error) {
        this.error = 'Error al filtrar productos'
      } finally {
        this.loading = false
      }
    }
  }
})