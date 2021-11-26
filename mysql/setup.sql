CREATE DATABASE IF NOT EXISTS lctestdb;

USE lctestdb;

CREATE USER IF NOT EXISTS 'liming'@'%' IDENTIFIED BY '12345678';

GRANT ALL PRIVILEGES ON * . * TO 'liming'@'%';

FLUSH PRIVILEGES;