/*
  Warnings:

  - Added the required column `completed` to the `ToDoList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ToDoList" ADD COLUMN     "completed" BOOLEAN NOT NULL;
