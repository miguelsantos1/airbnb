-- CreateTable
CREATE TABLE "Accommodation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "accomodationId" TEXT NOT NULL,
    CONSTRAINT "Feedback_accomodationId_fkey" FOREIGN KEY ("accomodationId") REFERENCES "Accommodation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
