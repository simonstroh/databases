var models = require('../models');
var fs = require('fs')

var external = {
  '/favicon.ico': function(res) {
    fs.readFile('./favicon.png', (err, data) => {
      if (err) throw err;
      res.end(data)
    })
  }
}

module.exports = {
  messages: {
    get: function (req, res) {
      console.log("Serving request type " + req.method + " for url /classes" + req.url)
      if (external[req.url]) external[req.url](res)
      models.messages.get(res)
    },
    post: function (req, res) {
      console.log("Serving request type " + req.method + " for url /classes" + req.url)
      models.messages.post(res, req.body)
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log("Serving request type " + req.method + " for url /classes" + req.url)
      models.users.get(res)
    },
    post: function (req, res) {
      console.log("Serving request type " + req.method + " for url /classes" + req.url)
      models.users.post(res, req.body)
    }
  }
};
