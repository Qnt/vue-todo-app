<script setup lang="ts">
import { provide, ref } from 'vue'
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import type { Todo, TodoResponse } from './types'
import { toggleTodoStatusKey } from './keys'
import TodoFooter from './components/TodoFooter.vue'

const todos = ref<Todo[]>([])
const additionStatus = ref<TodoResponse>()

function addTodo(title: Todo['title']) {
  if (!title.trim()) {
    additionStatus.value = {
      success: false,
      errors: [{ message: 'Text cannot be empty.' }],
    }
  } else {
    todos.value.push({
      id: todos.value.length ? todos.value.length + 1 : 1,
      title,
      done: false,
    })
    additionStatus.value = { success: true, message: 'New todo successfully added.' }
  }

  setTimeout(() => (additionStatus.value = undefined), 2000)
}

function toggleTodoStatus(id: Todo['id']) {
  todos.value = todos.value.map((todo) => (id === todo.id ? { ...todo, done: !todo.done } : todo))
}

function removeDoneTodos() {
  todos.value = todos.value.filter((todo) => !todo.done)
}

provide(toggleTodoStatusKey, toggleTodoStatus)
</script>

<template>
  <main class="wrapper">
    <h2>Vue Todo App</h2>
    <TodoForm :addition-status="additionStatus" @add="addTodo" />
    <TodoList :todos="todos" />
    <TodoFooter :todos="todos" @remove-done-todos="removeDoneTodos" />
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
</style>
