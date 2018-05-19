var db = require('../db');

var headers = {
  'Content-Type': 'application/json',
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 20 // Seconds.
};

var query = function(string, res) {
  db.query(string)
  setTimeout(function() {
    res.end(db.results)
  }, 2000)
}

module.exports = {
  messages: {
    get: function (res) {
      query("SELECT * FROM messages", res)
    },
    post: function (res, data) {
      db.post(data)
      res.writeHead(201, headers)
      res.end()
    }
  },

  users: {
    // Ditto as above.
    get: function (res) {
      query("SELECT * FROM users", res)
    },
    post: function (res, data) {
      db.post(data)
      res.writeHead(201, {'Content-Type': 'text/plain'})
      res.end()
    }
  }
};
