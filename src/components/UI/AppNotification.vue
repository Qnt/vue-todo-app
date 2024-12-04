<script setup lang="ts">
import type { TodoNotification } from '@/types'
import AppCard from './AppCard.vue'

defineProps<{
  notification?: TodoNotification
}>()
</script>

<template>
  <Teleport to="body">
    <AppCard v-if="notification" class="notification">
      <p v-if="notification.success" class="notification__info">
        {{ notification.message }}
      </p>
      <template v-else>
        <p
          v-for="(error, idx) in notification.errors"
          :key="`${error.message}-${idx}`"
          class="notification__error"
        >
          {{ error.message }}
        </p>
      </template>
    </AppCard>
  </Teleport>
</template>

<style scoped>
.notification {
  display: flex;
  flex-direction: column;
  font-size: small;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}

.notification__info {
  color: #060a08;
}
.notification__error {
  color: var(--danger-color);
}
</style>
