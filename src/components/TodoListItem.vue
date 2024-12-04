<script setup lang="ts">
import type { Todo } from '@/types'
import AppCard from './UI/AppCard.vue'
import { inject } from 'vue'
import { removeTodoKey, toggleTodoStatusKey } from '@/keys'
import AppButton from './UI/AppButton.vue'

defineProps<{
  todo: Todo
}>()

const done = defineModel<Todo['done']>('done', { required: true })

const toggleTodoStatus = inject(toggleTodoStatusKey) as (id: Todo['id']) => void
const removeTodo = inject(removeTodoKey) as (id: Todo['id']) => void
</script>

<template>
  <AppCard class="todo-item">
    <input
      v-model="done"
      class="todo-item__checkbox"
      type="checkbox"
      @click="toggleTodoStatus(todo.id)"
    />
    <p class="todo-item__title" :class="{ done: done }">{{ todo.title }}</p>
    <AppButton variant="danger" class="todo-item__button-delete" @click="removeTodo(todo.id)">
      x
    </AppButton>
  </AppCard>
</template>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.todo-item__title {
  flex-grow: 1;
  font-size: 1.125rem;
}

.todo-item__checkbox {
  aspect-ratio: 1;
  block-size: 1.25rem;
}

.todo-item__button-delete {
  aspect-ratio: 1;
  padding: 0.25rem;
  width: 2rem;
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0.5s,
    opacity 0.5s;
}

.hidden {
  visibility: hidden;
}

.todo-item:hover .todo-item__button-delete {
  visibility: visible;
  opacity: 1;
}

.done {
  text-decoration: line-through;
}
</style>
