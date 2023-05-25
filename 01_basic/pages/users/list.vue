<script lang="ts" setup>
// import { useCounter } from '~/composables/useCounter';
// const counter = useCounter();
const counter = ref(0);
const inc = () => {
  // createErrorはNuxtから提供されている関数で、クライアント側でもサーバー側でも利用でき、エラーオブジェクトを作成できる
  throw createError('エラー発生');
  counter.value++;
};
</script>

<template>
  <div>
    <h1>User Listページ</h1>
    <h2>Counter</h2>
    <p>Count: {{ counter }}</p>
    <div><button @click="inc">+</button></div>
    <NuxtPage />
  </div>
</template>
