<script lang="ts" setup>
const error = useError();

// useErrorではなくerrorオブジェクトをpropsとして受け取ることもできる
// const props = defineProps({
//   error: Object,
// });
</script>

<template>
  <NuxtLayout>
    <p>{{ error }}</p>
    <!-- <button @click="clearError({ redirect: '/' })">Clear Error</button> -->

    <button @click="clearError">Clear Error</button>
  </NuxtLayout>
</template>
