// Route Middlewareを利用することでページ間の移動、サイトへのアクセスを行いページが表示される前に事前に設定していた処理を行うことができる
import { defineNuxtRouteMiddleware, navigateTo, abortNavigation } from 'nuxt/app';

export default defineNuxtRouteMiddleware((to, from) => {
  // アクセスしているユーザーが管理者かどうかを判定してリダイレクトさせる
  // if (isAdmin() === false) {
  //   return navigateTo('/login');
  // }

  // ルートディレクトリがアクセスがあった場合はリダイレクトさせる
  if (from.fullPath === '/') {
    // return navigateTo('/');
    // 遷移を中止する
    return abortNavigation();
  }
});
