-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR(255) NOT NULL,
    "belongsToId" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_belongsToId_key" ON "Product"("id", "belongsToId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_belongsToId_fkey" FOREIGN KEY ("belongsToId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
