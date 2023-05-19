// pluginsディレクトリを作成してプラグインファイルを作成すると、アプリケーションの起動時に自動で登録を行ってくれるため、別途登録作業を行う必要がない
import { defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello(msg: string) {
        return `Hello ${msg}!`;
      },
    },
  };
});
