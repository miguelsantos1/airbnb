/*
  Warnings:

  - You are about to drop the column `accomodationId` on the `Feedback` table. All the data in the column will be lost.
  - Added the required column `accommodationId` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Feedback" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "accommodationId" TEXT NOT NULL,
    CONSTRAINT "Feedback_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "Accommodation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Feedback" ("about", "id", "title") SELECT "about", "id", "title" FROM "Feedback";
DROP TABLE "Feedback";
ALTER TABLE "new_Feedback" RENAME TO "Feedback";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
