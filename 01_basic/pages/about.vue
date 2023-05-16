<script lang="ts" setup>
// 特定のページでレイアウトを適用したくない場合は、definePageMeta関数で制御する
definePageMeta({
  layout: false,
});
</script>

<template>
  <div>
    <!-- customレイアウトのみ適用される -->
    <NuxtLayout name="custom">
      <h1>About Page</h1>
    </NuxtLayout>
  </div>
</template>
