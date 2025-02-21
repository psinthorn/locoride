/*
  Warnings:

  - You are about to drop the `Request` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Request";

-- CreateTable
CREATE TABLE "RequestBooking" (
    "id" TEXT NOT NULL,
    "requestNumber" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "mobile" TEXT,
    "whatsApp" TEXT,
    "line" TEXT,
    "skype" TEXT,
    "facebook" TEXT,
    "twitter" TEXT,
    "linkedIn" TEXT,
    "instagram" TEXT,
    "address" TEXT,
    "userId" TEXT,
    "clientId" TEXT,
    "vendorId" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "validDate" TIMESTAMP(3),
    "arrival" TIMESTAMP(3),
    "departure" TIMESTAMP(3),
    "flightNo" TEXT,
    "flightDateTime" TEXT,
    "rate" INTEGER NOT NULL,
    "quantity" INTEGER,
    "total" INTEGER,
    "carType" TEXT NOT NULL,
    "carModel" TEXT NOT NULL,
    "pickUpPoint" TEXT NOT NULL,
    "dropOffPoint" TEXT NOT NULL,
    "agreement" BOOLEAN NOT NULL,
    "note" TEXT,
    "status" "RequestStatus" DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RequestBooking_pkey" PRIMARY KEY ("id")
);
