import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event) => {
  // PrismaClientのインスタンスを作成
  const prisma = new PrismaClient();

  // リクエストのメソッドを取得する
  const method = event.node.req.method;

  if (method === 'GET') {
    // taskテーブルから全データを取得する
    const tasks = await prisma.task.findMany();
    return tasks;
  } else if (method === 'POST') {
    const body = await readBody(event);
    const newTask = await prisma.task.create({
      data: {
        task: body.task,
        completed: false,
      },
    });
    console.log(newTask);
    return newTask;
  }
});
