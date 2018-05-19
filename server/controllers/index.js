var models = require('../models');
var db = require('../db')

module.exports = {
  messages: {
    get: function (req, res) {

      // Takes a string of the SQL query to search for messages
      var messages = db.query("SELECT * FROM messages")
      res.end(messages)
    }, // a function which handles a get request for all messages
    post: function (req, res) {

      db.post()
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log("Serving request type " + req.method + " for url " + req.url)
    }
  }
};
