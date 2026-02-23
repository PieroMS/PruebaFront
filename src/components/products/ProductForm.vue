<script setup>
import { ref } from 'vue'
import { required, minLength } from '@/utils/validators'

const title = ref('')
const errors = ref({})

function validate() {
  errors.value = {}

  errors.value.title =
    required(title.value) ||
    minLength(title.value, 3)

  return !errors.value.title
}

function submitForm() {
  if (!validate()) return

  alert('Formulario válido')
}
</script>

<template>
  <div class="max-w-md mx-auto p-4">
    <input
      v-model="title"
      class="border p-2 w-full"
      placeholder="Nombre del producto"
    />

    <p v-if="errors.title" class="text-red-500 text-sm">
      {{ errors.title }}
    </p>

    <button
      @click="submitForm"
      class="bg-blue-500 text-white px-4 py-2 mt-2"
    >
      Guardar
    </button>
  </div>
</template>