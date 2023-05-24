<script lang="ts" setup>
import { useFetch, useAsyncData } from '#app';

// APIから取得したRefImpはリアクティブなオブジェクト
// const { data: posts, error, refresh } = await useFetch('https://jsonplaceholder.typicode.com/posts/');

// useAsyncDataの第一引数にはキャッシュに利用されるユニークキーを設定する
// 省略するとファイル名と行番号を利用して作成される
// const { data: posts, error } = await useAsyncData('posts', () => $fetch('https://jsonplaceholder.typicode.com/posts/'));
const { data: posts, error } = await useAsyncData(() => $fetch('https://jsonplaceholder.typicode.com/posts/'));
console.log(useNuxtApp().payload.data);
</script>

<template>
  <div>
    <h1>Posts一覧</h1>
    <!-- <button @click="refresh()">再取得</button> -->
    <p v-if="error">{{ error }}</p>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
