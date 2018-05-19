var mysql = require('mysql');
var Promise = require('bluebird');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbConnection;

dbConnection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

dbConnection.connect((err) => {
  if (err) throw err
  exports.post({ username: 'Eric', roomname: 'Room', text: 'Hello I am Eric and I am in Room.'})
});

exports.query = function(query) {
  var results = ''
  dbConnection.query(query, (err, data) => {
    results += data
  })
  return results
}

var insert = function(sql) {
  dbConnection.query(sql, (err, data) => { if (err) console.log(err) })
}

var select = function(sql, stor, info, cb) {
  return new Promise(function(res, rej) {
    dbConnection.query(sql, (err, data) => {
      if (err) rej(err)
      else res(stor = data[0][info])
      console.log("Is this what you queried for?", stor)
    })
  }).then(cb)
}

exports.post = function(obj) {
  console.log("This is a post to the SQL server")
  var sqlUsers = `INSERT INTO users(userName) VALUES ('${obj.username}')`
  var sqlRooms = `INSERT INTO rooms(roomName) VALUES ('${obj.roomname}')`
  var sqlMessages = `INSERT INTO messages(content, userID, roomID) VALUES ('${obj.text}', '${obj.username}', '${obj.roomname}')`
  insert(sqlUsers)
  insert(sqlRooms)
  insert(sqlMessages)
}
