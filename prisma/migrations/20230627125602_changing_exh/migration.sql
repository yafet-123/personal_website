/*
  Warnings:

  - The `Image` column on the `SelectedWorks` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `resetToken` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[role]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_resetToken_key";

-- AlterTable
ALTER TABLE "Exhibition" ADD COLUMN     "type" TEXT,
ADD COLUMN     "view" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "SelectedWorks" ADD COLUMN     "view" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "Image",
ADD COLUMN     "Image" TEXT[];

-- AlterTable
ALTER TABLE "User" DROP COLUMN "resetToken",
ADD COLUMN     "role" VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "User_role_key" ON "User"("role");
