<script setup lang="ts" generic="T extends readonly string[]">
import AppCard from './AppCard.vue'

const { filters } = defineProps<{
  filters: T
}>()
const curFilter = defineModel<T[number]>({ required: true })
</script>

<template>
  <AppCard class="todo-list__filter">
    <template v-for="filter in filters" :key="filter">
      <div class="todo-list__filter-item">
        <input
          :id="filter"
          v-model="curFilter"
          class="todo-list__filter-input"
          type="radio"
          :name="filter"
          :value="filter"
        />
        <label class="todo-list__filter-label" :for="filter">
          {{ filter.charAt(0).toLowerCase() + filter.slice(1) }}
        </label>
      </div>
    </template>
  </AppCard>
</template>

<style scoped>
.todo-list__filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}

.todo-list__filter-input {
  display: none;
}

.todo-list__filter-label {
  cursor: pointer;
  font-size: 1.25rem;
}

.todo-list__filter-input:checked + .todo-list__filter-label {
  text-decoration: underline;
}
</style>
