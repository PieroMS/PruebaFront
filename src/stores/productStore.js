import { defineStore } from 'pinia'
import productService from '@/services/productService'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    loading: false,
    error: null,
    success: null,
  }),

  actions: {
    async fetchProducts() {
      this.loading = true
      this.error = null

      try {
        const data = await productService.getAll()
        this.products = data
        this.success = 'Productos cargados correctamente'
      } catch (error) {
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    setError(message) {
      this.error = message
      this.loading = false
    },
  },
})