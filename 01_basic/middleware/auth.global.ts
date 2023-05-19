// ファイル名にglobalをつけると全てのページにmiddlewareが自動的に設定される
import { defineNuxtRouteMiddleware } from 'nuxt/app';

export default defineNuxtRouteMiddleware((to, from) => {
  console.log('from', from);
  console.log('to', to);
});
