-- CREATE DATABASE chat;

USE chat;


/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  userID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userName char(50) NOT NULL
);

CREATE TABLE rooms (
  roomID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  roomName char(50) NOT NULL
);

CREATE TABLE messages (
  /* Describe your table here.*/
  messageID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(140) NOT NULL,
  roomname varchar(140) NOT NULL,
  message varchar(140) NOT NULL
);
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
