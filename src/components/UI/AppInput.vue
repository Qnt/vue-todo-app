<script setup lang="ts">
const model = defineModel<string, 'trim'>({
  required: true,
})
</script>

<template>
  <input v-model="model" class="form-input" />
</template>

<style scoped>
.form-input {
  padding: 0.5rem;
  font-size: 1.25rem;
  border-radius: 0.5rem;
  border: none;
}
</style>
