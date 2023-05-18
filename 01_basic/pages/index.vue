<script lang="ts" setup>
// useRoute関数を利用してroute.meta.layoutの値を設定することも動的に可能
/*
const route = useRoute();
const enableCustomLayout = () => {
  route.meta.layout = 'custom';
};
*/
definePageMeta({
  layout: false,
});
</script>

<template>
  <div>
    <!-- NuxtLayoutに明示的にnameの設定が必須になる。またNuxtLayoutがないとエラーになる（名前付きSlot） -->
    <NuxtLayout name="default">
      <template #header>ヘッダー</template>
      <h1>Main Page</h1>
    </NuxtLayout>
    <!-- <button @click="enableCustomLayout">Update Layout</button> -->
    <!-- <NuxtLayout name="custom"> -->
    <!--   <h1>Main Page</h1> -->
    <!-- </NuxtLayout> -->
  </div>
</template>
