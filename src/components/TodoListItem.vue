<script setup lang="ts">
import type { Todo } from '@/types'
import AppCard from './UI/AppCard.vue'
import { inject } from 'vue'
import { toggleTodoStatusKey } from '@/keys'

defineProps<{
  todo: Todo
}>()

const toggleTodoStatus = inject(toggleTodoStatusKey) as (id: Todo['id']) => void
</script>

<template>
  <AppCard class="todo-item">
    <p class="todo-item__title" :class="{ done: todo.done }">{{ todo.title }}</p>
    <input
      :value="todo.done"
      class="todo-item__checkbox"
      type="checkbox"
      @click="toggleTodoStatus(todo.id)"
    />
  </AppCard>
</template>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
}

.todo-item__title {
  font-size: 1.125rem;
}

.todo-item__checkbox {
  aspect-ratio: 1;
  block-size: 1.25rem;
}

.done {
  text-decoration: line-through;
}
</style>
