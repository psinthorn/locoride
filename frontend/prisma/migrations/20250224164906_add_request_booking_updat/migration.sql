/*
  Warnings:

  - You are about to drop the column `dropOffPoint` on the `RequestBooking` table. All the data in the column will be lost.
  - You are about to drop the column `pickUpPoint` on the `RequestBooking` table. All the data in the column will be lost.
  - Added the required column `dropoffPoint` to the `RequestBooking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickupPoint` to the `RequestBooking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RequestBooking" DROP COLUMN "dropOffPoint",
DROP COLUMN "pickUpPoint",
ADD COLUMN     "dropoffPoint" TEXT NOT NULL,
ADD COLUMN     "pickupPoint" TEXT NOT NULL;
