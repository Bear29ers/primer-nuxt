<script lang="ts" setup>
definePageMeta({
  // ページ単位でPage Transitionを設定する
  pageTransition: false,
});

useHead({
  // titleTemplate: (title) => {
  //   return title ? `${title} - Nuxt 3 Basic` : 'Nuxt 3 Basic';
  // },
  titleTemplate: '%s - Nuxt 3 Basic',
});
</script>

<template>
  <div>
    <!-- lang属性をすべてのページに反映させる -->
    <Html lang="ja" />
    <!-- ディレクトリ構造が反映される -->
    <Navbar />
    <!-- <NavNavbar /> -->
    <!-- <slot name="header" /> -->
    <!-- <nav>ここにナビゲーションバーを入れる</nav> -->
    <slot />
  </div>
</template>

<style>
.page-entry-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
