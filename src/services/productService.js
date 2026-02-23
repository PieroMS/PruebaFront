import api from './api'

export default {
  async getAll() {
    const response = await api.get('/products')
    return response.data
  },

  async getByCategory(category) {
    const response = await api.get(`/products/category/${category}`)
    return response.data
  },
}