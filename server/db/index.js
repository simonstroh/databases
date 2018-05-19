var mysql = require('mysql');

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
  exports.query("SELECT * FROM messages")
});

exports.query = function(query) {
  var results = ''
  dbConnection.query(query, (err, data) => {
    results += JSON.stringify(data)
  })
  setTimeout(function() {
    exports.messages = results
  }, 2000)
}

var insert = function(sql) {
  dbConnection.query(sql, (err, data) => { if (err) console.log(err) })
  exports.query("SELECT * FROM messages")
}

exports.post = function(obj) {
  console.log("This is a post to the SQL server")
  var sqlUsers = `INSERT INTO users(userName) VALUES ("${obj.username}")`
  var sqlRooms = `INSERT INTO rooms(roomName) VALUES ("${obj.roomname}")`
  var sqlMessages = `INSERT INTO messages(username, roomname, message) VALUES ("${obj.username}", "${obj.roomname}", "${obj.text}")`
  insert(sqlUsers)
  insert(sqlRooms)
  insert(sqlMessages)
}
