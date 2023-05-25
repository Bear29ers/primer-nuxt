<script lang="ts" setup>
const resetError = (error) => {
  error.value = null;
};
// エラー情報を取得して別の処理を行うためにエラーイベントを設定する
const someErrorLogger = (error) => {
  // 取得したエラーで別の処理を行う
  console.log('someErrorLogger', error);
};
</script>

<template>
  <div>
    <h1>Usersページ</h1>
    <!-- NuxtPageタグでページのネスト化を行う -->
    <!-- NuxtErrorBoundaryでエラーをキャッチして表示内容を制御する -->
    <NuxtErrorBoundary @error="someErrorLogger">
      <NuxtPage />
      <template #error="{ error }">
        <p>{{ error }}</p>
        <button @click="resetError(error)">Clear Error</button>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>
