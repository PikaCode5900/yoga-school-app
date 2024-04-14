DROP DATABASE IF EXISTS yoga_school_db;
CREATE DATABASE yoga_school_db;
USE yoga_school_db;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
GRANT ALL PRIVILEGES ON yoga_school_db.* TO 'root'@'localhost';
FLUSH PRIVILEGES;