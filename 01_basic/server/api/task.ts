import { defineEventHandler } from 'h3';
import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async () => {
  const prisma = new PrismaClient();
  // taskテーブルから全データを取得する
  const tasks = await prisma.task.findMany();

  return tasks;
});
