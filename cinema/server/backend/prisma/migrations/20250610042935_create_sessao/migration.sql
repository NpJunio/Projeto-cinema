/*
  Warnings:

  - You are about to drop the column `horario` on the `Sessao` table. All the data in the column will be lost.
  - Added the required column `dataHora` to the `Sessao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formato` to the `Sessao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idioma` to the `Sessao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco` to the `Sessao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sessao" DROP COLUMN "horario",
ADD COLUMN     "dataHora" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "formato" TEXT NOT NULL,
ADD COLUMN     "idioma" TEXT NOT NULL,
ADD COLUMN     "preco" DOUBLE PRECISION NOT NULL;
