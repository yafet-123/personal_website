/*
  Warnings:

  - You are about to drop the column `description` on the `Exhibition` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Exhibition" DROP COLUMN "description",
ADD COLUMN     "place" TEXT;
