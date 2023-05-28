/*
serverディレクトリにroutesディレクトリを作成してファイルをほぞんすることで、
/ファイル名でAPIのエンドポイントを作成することができます。
*/
import { defineEventHandler } from 'h3';

export default defineEventHandler(() => 'Hello World');
