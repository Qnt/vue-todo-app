<script setup lang="ts">
import type { Todo } from '@/types'
import { computed, ref } from 'vue'
import TodoListItem from './TodoListItem.vue'
import AppFilter from './UI/AppFilter.vue'
import AppCard from './UI/AppCard.vue'

const { todos } = defineProps<{
  todos: Todo[]
}>()

const filters = ['all', 'active', 'done'] as const
const curFilter = ref<(typeof filters)[number]>('all')

const filteredTodos = computed(() => {
  switch (curFilter.value) {
    case 'active':
      return todos.filter((todo) => !todo.done)
    case 'done':
      return todos.filter((todo) => todo.done)

    default:
      return todos
  }
})
</script>

<template>
  <template v-if="todos.length">
    <AppFilter v-model="curFilter" :filters="filters" />
    <TodoListItem
      v-for="todo in filteredTodos"
      :key="todo.id"
      v-model:done="todo.done"
      :todo="todo"
    />
  </template>
  <AppCard v-else class="center">Nothing to do!</AppCard>
</template>

<style scoped>
.center {
  display: flex;
  justify-content: center;
}
</style>
