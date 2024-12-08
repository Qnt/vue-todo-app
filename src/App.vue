<script setup lang="ts">
import { onUnmounted, provide, ref, watchEffect } from 'vue'
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import type { Todo, TodoNotification } from './types'
import { removeTodoKey, toggleTodoStatusKey } from './keys'
import TodoFooter from './components/TodoFooter.vue'
import AppNotification from './components/UI/AppNotification.vue'

let notificationTimeoutId: number
const STORAGE_KEY = 'vue_todo_storage'
const todos = ref<Todo[]>(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]'))
const additionStatus = ref<TodoNotification>()

function isTodoWithSameTitleExists(title: Todo['title']) {
  return todos.value.some((todo) => todo.title === title)
}

function addTodo(title: Todo['title']) {
  if (notificationTimeoutId) {
    clearTimeout(notificationTimeoutId)
  }
  if (!title.trim()) {
    additionStatus.value = {
      success: false,
      errors: [{ message: 'Text cannot be empty.' }],
    }
  } else if (isTodoWithSameTitleExists(title)) {
    additionStatus.value = {
      success: false,
      errors: [{ message: 'A todo with the same title already exists.' }],
    }
  } else {
    todos.value.push({
      id: crypto.randomUUID(),
      title,
      done: false,
    })
    additionStatus.value = { success: true, message: 'New todo successfully added.' }
  }

  notificationTimeoutId = setTimeout(() => (additionStatus.value = undefined), 2000)
}

function toggleTodoStatus(id: Todo['id']) {
  todos.value = todos.value.map((todo) => (id === todo.id ? { ...todo, done: !todo.done } : todo))
}

function removeTodo(id: Todo['id']) {
  todos.value = todos.value.filter((todo) => id !== todo.id)
}

function removeDoneTodos() {
  todos.value = todos.value.filter((todo) => !todo.done)
}

provide(toggleTodoStatusKey, toggleTodoStatus)
provide(removeTodoKey, removeTodo)

watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos.value))
})

onUnmounted(() => {
  if (notificationTimeoutId) {
    clearTimeout(notificationTimeoutId)
  }
})
</script>

<template>
  <main class="wrapper">
    <h2 class="header">Vue Todo App</h2>
    <TodoForm :addition-status="additionStatus" @add="addTodo" />
    <TodoList :todos="todos" />
    <TodoFooter v-if="todos.length" :todos="todos" @remove-done-todos="removeDoneTodos" />
    <AppNotification :notification="additionStatus" />
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-basis: 400px;
  padding: 1rem;
}

.header {
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
}
</style>
