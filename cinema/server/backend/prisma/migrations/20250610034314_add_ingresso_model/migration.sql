/*
  Warnings:

  - You are about to drop the column `vendido` on the `Ingresso` table. All the data in the column will be lost.
  - Added the required column `cliente` to the `Ingresso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `Ingresso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pagamento` to the `Ingresso` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ingresso" DROP COLUMN "vendido",
ADD COLUMN     "cliente" TEXT NOT NULL,
ADD COLUMN     "cpf" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "pagamento" TEXT NOT NULL;
