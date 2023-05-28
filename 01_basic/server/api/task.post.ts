import { PrismaClient } from '@prisma/client';
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();

  const body = await readBody(event);
  const newTask = await prisma.task.create({
    data: {
      task: body.task,
      completed: false,
    },
  });
  return newTask;
});
