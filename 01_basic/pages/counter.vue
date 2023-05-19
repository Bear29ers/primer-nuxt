<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

const { count, inc, dec } = useCounter(100);
</script>

<template>
  <div>
    <h1>Main Page</h1>
    <div>Count: {{ count }}</div>
    <div>
      <button @click="() => inc()">Increase</button>
      <button @click="() => dec()">Decrease</button>
    </div>
  </div>
</template>
