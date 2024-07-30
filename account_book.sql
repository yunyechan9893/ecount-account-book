CREATE DATABASE account_book;

CREATE TABLE IF NOT EXISTS `account_book`.`member` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `member_id` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `member_id_UNIQUE` (`member_id` ASC) VISIBLE
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `account_book`.`finance` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `member_id` VARCHAR(255) NOT NULL,
  `transaction_date` TIMESTAMP NOT NULL,
  `category` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `amount` BIGINT NOT NULL,
  `memo` TEXT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `modified_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `member_id_idx` (`member_id` ASC),
  CONSTRAINT `fk_member`
    FOREIGN KEY (`member_id`)
    REFERENCES `account_book`.`member` (`member_id`)
    ON DELETE NO ACTION
) ENGINE = InnoDB;