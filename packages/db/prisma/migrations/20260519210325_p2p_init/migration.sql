-- CreateTable
CREATE TABLE "P2pTransactions" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "senderId" INTEGER NOT NULL,
    "recieaverId" INTEGER NOT NULL,

    CONSTRAINT "P2pTransactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "P2pTransactions" ADD CONSTRAINT "P2pTransactions_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "P2pTransactions" ADD CONSTRAINT "P2pTransactions_recieaverId_fkey" FOREIGN KEY ("recieaverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
