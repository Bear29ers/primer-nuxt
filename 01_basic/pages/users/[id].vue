<!-- ダイナミックルーティングを利用してパラメータごとに異なるページを表示する -->
<script lang="ts" setup>
import { useRoute } from 'vue-router';

const router = useRoute();
</script>

<template>
  <div>
    <p>ユーザーID: {{ $route.params.id }}</p>
    <p>ユーザーID: {{ router.params.id }}</p>
  </div>
</template>
