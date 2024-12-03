<script setup lang="ts"></script>

<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  padding: 1rem;
  background-color: var(--secondary-color);
  border-radius: 0.5rem;
  box-shadow: var(--shadow-primary);
}
</style>
