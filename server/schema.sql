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
  content varchar(140) NOT NULL,
  userID int NOT NULL,
  roomID int NULL,
  CONSTRAINT FK_User FOREIGN KEY (userID)
  REFERENCES users(userID),
  CONSTRAINT FK_Room FOREIGN KEY (roomID)
  REFERENCES rooms(roomID)
);
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
