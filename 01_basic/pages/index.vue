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

const show = ref(false);
const handleClick = () => {
  show.value = true;
};

// const { data } = useFetch('/api/hello');

const { data: tasks } = useFetch('/api/task');
</script>

<template>
  <div>
    <NuxtLayout name="default">
      <h1>Main Page</h1>
      <div>
        <img src="~/assets/icon.png" alt="Nuxt3 Icon" width="50" height="50" />
      </div>
    </NuxtLayout>
    <!-- <h1>Main Page</h1> -->
    <button @click="handleClick">Coupon Get</button>
    <!-- Lazy Loadingを利用することでコンポーネントが必要なときのみJavaScriptファイルをダウンロードする -->
    <LazyCoupon v-if="show" />
    <!-- NuxtLayoutに明示的にnameの設定が必須になる。またNuxtLayoutがないとエラーになる（名前付きSlot） -->
    <!-- <NuxtLayout name="default"> -->
    <!--   <template #header>ヘッダー</template> -->
    <!--   <h1>Main Page</h1> -->
    <!-- </NuxtLayout> -->

    <!-- <button @click="enableCustomLayout">Update Layout</button> -->
    <!-- <NuxtLayout name="custom"> -->
    <!--   <h1>Main Page</h1> -->
    <!-- </NuxtLayout> -->
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.task }}</li>
    </ul>
  </div>
</template>
