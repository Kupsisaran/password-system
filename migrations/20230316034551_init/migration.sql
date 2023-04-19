/*
  Warnings:

  - A unique constraint covering the columns `[password]` on the table `Auth` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[color]` on the table `Auth` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[image]` on the table `Auth` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Auth_password_key` ON `Auth`(`password`);

-- CreateIndex
CREATE UNIQUE INDEX `Auth_color_key` ON `Auth`(`color`);

-- CreateIndex
CREATE UNIQUE INDEX `Auth_image_key` ON `Auth`(`image`);
