<script setup lang="ts">
import type { Todo } from '@/types'
import { ref } from 'vue'
import AppButton from './UI/AppButton.vue'
import AppCard from './UI/AppCard.vue'
import AppInput from './UI/AppInput.vue'

const emit = defineEmits<{
  add: [title: Todo['title']]
}>()
const inputValue = ref('')

function handleSubmit() {
  emit('add', inputValue.value)
  inputValue.value = ''
}
</script>

<template>
  <AppCard>
    <form class="todo-form" @submit.prevent="handleSubmit">
      <AppInput v-model="inputValue" type="text" />
      <AppButton type="submit">add todo</AppButton>
    </form>
  </AppCard>
</template>

<style scoped>
.todo-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
