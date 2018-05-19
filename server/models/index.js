var db = require('../db');

module.exports = {
  messages: {
    get: function (res) {
      // console.log("Request type GET served!")
      res.writeHead(200, {'access-control-allow-origin': '*'})
      res.end(db.messages)
    },
    post: function (res, data) {
      // console.log("Request type POST served!")
      db.post(data)
      res.writeHead(201, {'Content-Type': 'application/json'})
      res.end()
    }
  },

  users: {
    // Ditto as above.
    get: function (res) {
      var users = db.query("SELECT * FROM users")
      res.writeHead(200, {'access-control-allow-origin': '*'})
      res.end(users)
    },
    post: function (res) {
      // db.post()
      res.writeHead(201, {'Content-Type': 'text/plain'})
      res.end()
    }
  }
};
