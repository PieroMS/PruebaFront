import api from './api'

export default {
  async getAll() {
    const response = await api.get('/products/categories')
    return response.data
  }
}