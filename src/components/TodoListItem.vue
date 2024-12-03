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
    <div :class="{ done: todo.done }">{{ todo.title }}</div>
    <input :value="todo.done" type="checkbox" @click="toggleTodoStatus(todo.id)" />
  </AppCard>
</template>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
}

.done {
  text-decoration: line-through;
}
</style>
