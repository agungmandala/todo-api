-- AddForeignKey
ALTER TABLE `Todo` ADD CONSTRAINT `Todo_activity_group_id_fkey` FOREIGN KEY (`activity_group_id`) REFERENCES `Activity`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
