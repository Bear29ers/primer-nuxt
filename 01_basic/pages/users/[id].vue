<!-- ダイナミックルーティングを利用してパラメータごとに異なるページを表示する -->
<script lang="ts" setup>
import { useRoute } from 'vue-router';

const router = useRoute();

useHead({
  title: 'Nuxt 3',
  meta: [
    {
      name: 'description',
      content: `User Id: ${router.params.id}`,
    },
  ],
});
</script>

<template>
  <div>
    <!-- <p>ユーザーID: {{ $route.params.id }}</p> -->
    <p>ユーザーID: {{ router.params.id }}</p>
  </div>
</template>
