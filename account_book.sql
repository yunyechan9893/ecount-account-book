CREATE DATABASE account_book;

CREATE TABLE IF NOT EXISTS `account_book`.`member` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `member_id` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `member_id_UNIQUE` (`member_id` ASC) VISIBLE
) ENGINE = InnoDB;


CREATE TABLE `category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `category_type` varchar(255) NOT NULL,
  `major_category` varchar(255) NOT NULL,
  `middle_category` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


CREATE TABLE `finance` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `member_id` bigint DEFAULT NULL,
  `transaction_date` timestamp NOT NULL,
  `description` varchar(255) NOT NULL,
  `amount` bigint NOT NULL,
  `memo` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `asset` varchar(255) DEFAULT NULL,
  `classification` varchar(255) DEFAULT NULL,
  `category_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `member_id_idx` (`member_id`),
  KEY `fk_finance_category` (`category_id`),
  CONSTRAINT `fk_finance_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `fk_finance_member_id` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

