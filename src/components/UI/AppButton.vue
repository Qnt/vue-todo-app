<script setup lang="ts">
const { variant = 'primary' } = defineProps<{
  variant?: string
}>()
</script>

<template>
  <button
    class="form-button"
    :class="{
      primary: variant === 'primary',
      danger: variant === 'danger',
    }"
  >
    <slot>button</slot>
  </button>
</template>

<style scoped>
.form-button {
  padding: 0.5rem;
  border-radius: 100rem;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 700;
  width: 100%;
}

.primary {
  background: var(--primary-color);
  box-shadow: var(--shadow-primary);
}
.danger {
  background: var(--danger-color);
  box-shadow: var(--shadow-danger);
  color: white;
}
</style>
