<script lang="ts" setup>
// useRoute関数を利用してroute.meta.layoutの値を設定することも動的に可能
const route = useRoute();
const enableCustomLayout = () => {
  route.meta.layout = 'custom';
};

definePageMeta({
  layout: false,
});
</script>

<template>
  <div>
    <button @click="enableCustomLayout">Update Layout</button>
    <!-- <NuxtLayout name="custom"> -->
    <!--   <h1>Main Page</h1> -->
    <!-- </NuxtLayout> -->
  </div>
</template>
