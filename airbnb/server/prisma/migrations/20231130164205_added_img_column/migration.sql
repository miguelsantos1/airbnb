/*
  Warnings:

  - Added the required column `img` to the `Accommodation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Accommodation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Accommodation" ("createdAt", "description", "id", "name") SELECT "createdAt", "description", "id", "name" FROM "Accommodation";
DROP TABLE "Accommodation";
ALTER TABLE "new_Accommodation" RENAME TO "Accommodation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
