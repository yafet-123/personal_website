-- CreateTable
CREATE TABLE "news" (
    "news_id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "link" TEXT,
    "view" INTEGER NOT NULL DEFAULT 0,
    "Image" TEXT[],
    "CreatedDate" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "ModifiedDate" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "news_pkey" PRIMARY KEY ("news_id")
);

-- AddForeignKey
ALTER TABLE "news" ADD CONSTRAINT "news_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
