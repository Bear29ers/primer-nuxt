<script lang="ts" setup>
// definePageMeta関数でmiddlewareを設定する
definePageMeta({
  middleware: 'auth',
  /* inlineでmiddlewareを設定する方法
    middleware: defineNuxtRouteMiddleware((to, from) => {
      console.log('from', from);
      console.log('to', to);
    }),
  */
});

// const enableCustomLayout = () => {
//   // setPageLayout関数を使ってページに適用するレイアウトを動的に変更する
//   setPageLayout('custom');
// };

// 特定のページでレイアウトを適用したくない場合は、definePageMeta関数で制御する
// definePageMeta({
//   layout: false,
// });
</script>

<template>
  <div>
    <!-- <button @click="enableCustomLayout">Update Layout</button> -->

    <!-- customレイアウトのみ適用される -->
    <NuxtLayout name="custom">
      <h1>About Page</h1>
    </NuxtLayout>
  </div>
</template>
