<script lang="ts" setup>
import { useCounter } from '~/composables/useCounter';

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

// const title = ref('Aboutページ');
// const description = ref('Aboutページ');

// useMeta関数で個別にmetaタグを設定する
// useHead({
//   title,
//   meta: [
//     {
//       name: 'description',
//       content: description,
//     },
//   ],
// });

// const enableCustomLayout = () => {
//   // setPageLayout関数を使ってページに適用するレイアウトを動的に変更する
//   setPageLayout('custom');
// };

// 特定のページでレイアウトを適用したくない場合は、definePageMeta関数で制御する
// definePageMeta({
//   layout: false,
// });

// useStateを利用するとページ遷移をしてもcountの値を保持する
// const counter = useState('counter', () => 0);
const counter = useCounter();
</script>

<template>
  <div>
    <Head lang="ja">
      <Title>Aboutページ</Title>
      <Meta name="description" content="Aboutページ" />
    </Head>
    <!-- <button @click="enableCustomLayout">Update Layout</button> -->

    <!-- customレイアウトのみ適用される -->
    <NuxtLayout name="custom">
      <h1>About Page</h1>
      <h2>Counter</h2>
      <p>Count: {{ counter }}</p>
      <div><button @click="counter++">+</button></div>
    </NuxtLayout>
  </div>
</template>
