<script lang="ts" setup>
const admin = false;
const layout = admin ? 'custom' : 'default';
</script>

<template>
  <!-- NuxtLayoutタグで自動でlayoutsディレクトリに存在するdefault.vueの内容が適用される -->
  <!-- v-bindのname propsを利用して動的にレイアウトを変更する -->
  <NuxtLayout>
    <!-- 全体にデフォルトで設定するレイアウトファイルを設定する場合 -->
    <!-- <NuxtLayout name="custom"> -->
    <!-- pages以下の内容を適用するためにNuxtPageタグを追加する -->
    <NuxtPage />
  </NuxtLayout>
</template>
