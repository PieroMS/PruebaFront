export function required(value) {
  if (!value || value.trim() === '') {
    return 'Este campo es requerido'
  }
  return null
}

export function minLength(value, min) {
  if (value.length < min) {
    return `Debe tener al menos ${min} caracteres`
  }
  return null
}