import axios from 'axios'
import { useProductStore } from '@/stores/productStore'

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000,
})

// Request
api.interceptors.request.use(config => {
  return config
})

// Response
api.interceptors.response.use(
  response => response,
  error => {
    const productStore = useProductStore()

    if (error.response) {
      productStore.setError(
        error.response.data.message || 'Error del servidor'
      )
    } else {
      productStore.setError('Error de conexión')
    }

    return Promise.reject(error)
  }
)

export default api