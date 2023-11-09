/*
  Warnings:

  - You are about to drop the column `icon` on the `Section` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Section" DROP COLUMN "icon",
ADD COLUMN     "iconActive" TEXT NOT NULL DEFAULT '/icon/open.png',
ADD COLUMN     "iconUnActive" TEXT NOT NULL DEFAULT '/icon/close.png',
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false;
