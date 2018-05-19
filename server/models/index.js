var db = require('../db');

module.exports = {
  messages: {
    get: function (res) {
      // console.log("Request type GET served!")
      db.query("SELECT * FROM messages")
      res.writeHead(200, {'access-control-allow-origin': '*'})
      setTimeout(function() {
        res.end(db.results)
      }, 2000)
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
      db.query("SELECT * FROM users")
      res.writeHead(200, {'access-control-allow-origin': '*'})
      setTimeout(function() {
        res.end(db.results)
      }, 2000)
    },
    post: function (res, data) {
      db.post(data)
      res.writeHead(201, {'Content-Type': 'text/plain'})
      res.end()
    }
  }
};
