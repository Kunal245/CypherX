/*
  Warnings:

  - You are about to drop the column `recieaverId` on the `P2pTransactions` table. All the data in the column will be lost.
  - Added the required column `receiverId` to the `P2pTransactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "P2pTransactions" DROP CONSTRAINT "P2pTransactions_recieaverId_fkey";

-- AlterTable
ALTER TABLE "P2pTransactions" DROP COLUMN "recieaverId",
ADD COLUMN     "receiverId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "P2pTransactions" ADD CONSTRAINT "P2pTransactions_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
