<script setup lang="ts">
import type { Todo } from '@/types'
import { computed } from 'vue'
import AppButton from './UI/AppButton.vue'

const { todos } = defineProps<{
  todos: Todo[]
}>()

defineEmits<{
  removeDoneTodos: []
}>()

const totalTodos = computed(() => todos.length)

const doneTodos = computed(() => todos.reduce((count, todo) => count + +todo.done, 0))
</script>

<template>
  <div class="todo-footer">
    <div class="todo-footer__stats">
      <div>Total: {{ totalTodos }}</div>
      <div>Done: {{ doneTodos }}</div>
    </div>
    <div class="todo-footer__controls">
      <AppButton v-if="doneTodos > 0" variant="danger" @click="$emit('removeDoneTodos')"
        >Remove done todos</AppButton
      >
    </div>
  </div>
</template>

<style scoped>
.todo-footer {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.todo-footer__stats {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.todo-footer__stats > div {
  padding: 0.5rem;
}

.todo-footer__controls {
  flex-grow: 1;
}
</style>
