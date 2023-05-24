<script lang="ts" setup>
import { useFetch, useAsyncData } from '#app';

// APIから取得したRefImpはリアクティブなオブジェクト
// const { data: posts, error, refresh } = await useFetch('https://jsonplaceholder.typicode.com/posts/');

// useAsyncDataの第一引数にはキャッシュに利用されるユニークキーを設定する
// 省略するとファイル名と行番号を利用して作成される
// const { data: posts, error } = await useAsyncData('posts', () => $fetch('https://jsonplaceholder.typicode.com/posts/'));
// const { data: posts, error } = await useAsyncData(() => $fetch('https://jsonplaceholder.typicode.com/posts/'));
// console.log(useNuxtApp().payload.data);

// $fetchはヘルパー関数で内部ではofetchライブラリを利用する。ofetchライブラリはNode、ブラウザ、ワーカー上で利用できるfetch API。
/*
$fetch関数
const posts = ref([]);
const data = await $fetch('https://jsonplaceholder.typicode.com/posts/');
posts.value = data;
*/

/*
fetch関数
const posts = ref([]);
const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
const data = await response.json();
posts.value = data;
*/

// ofetchではPOSTリクエストする際に自動でJSON形式にデータを変換する
/*
// $fetch関数
const data = await $fetch('/api/user', {
  method: 'POST',
  body: { name: 'John Doe' },
});

// fetch関数
const response = await fetch('/api/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'John Doe' }),
});
*/
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
