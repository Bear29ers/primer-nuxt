<script lang="ts" setup>
// import { useCounter } from '~/composables/useCounter';
// const counter = useCounter();
// const counter = ref(0);
// const inc = () => {
// createErrorはNuxtから提供されている関数で、クライアント側でもサーバー側でも利用でき、エラーオブジェクトを作成できる
// throw createError({
//   statusCode: 400,
//   message: 'エラー発生',
//   fatal: true, // デフォルトのエラー画面を表示させる
// });

// showErrorの場合はNuxtErrorBoundaryを設定していてもフルスクリーンのエラーページが表示される
// throw showError({
//   statusCode: 400,
//   statusMessage: 'Bad Request',
//   message: 'エラー発生',
// });

// counter.value++;
// };

const { data: users } = await useFetch('https://jsonplaceholder.typicode.com/user/');
console.log('process');

if (!users.value) {
  // サーバーサイドではフルスクリーンのエラーページが表示され、クライアントサイドではNuxtErrorBoundaryのエラーが表示される
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
}
</script>

<template>
  <div>
    <h1>User Listページ</h1>
    <!-- <h2>Counter</h2> -->
    <!-- <p>Count: {{ counter }}</p> -->
    <!-- <div><button @click="inc">+</button></div> -->
    <!-- <NuxtPage /> -->
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
