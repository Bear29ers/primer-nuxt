<script lang="ts" setup>
import { useCounter } from '~/composables/useCounter';
const counter = useCounter();
</script>

<template>
  <div>
    <h1>User Listページ</h1>
    <p>Count: {{ counter }}</p>
    <NuxtPage />
  </div>
</template>
