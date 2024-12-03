<script setup lang="ts">
import type { Todo, TodoResponse } from '@/types'
import { ref } from 'vue'
import AppButton from './UI/AppButton.vue'
import AppCard from './UI/AppCard.vue'
import AppInput from './UI/AppInput.vue'

defineProps<{
  additionStatus?: TodoResponse
}>()
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
      <div v-if="additionStatus" class="todo-form__notification">
        <p v-if="additionStatus.success" class="todo-form__notification--info">
          {{ additionStatus.message }}
        </p>
        <template v-else>
          <p
            v-for="(error, idx) in additionStatus.errors"
            :key="`${error.message}-${idx}`"
            class="todo-form__notification--error"
          >
            {{ error.message }}
          </p>
        </template>
      </div>
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

.todo-form__notification {
  display: flex;
  flex-direction: column;
  font-size: small;
}

.todo-form__notification--info {
  color: #060a08;
}
.todo-form__notification--error {
  color: var(--danger-color);
}
</style>
