-- CreateTable
CREATE TABLE "specification" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "specification_pkey" PRIMARY KEY ("id")
);
