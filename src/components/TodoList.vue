<script setup lang="ts">
import type { Todo } from '@/types'
import TodoListItem from './TodoListItem.vue'

defineProps<{
  todos: Todo[]
}>()
</script>

<template>
  <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" />
</template>

<style scoped></style>
