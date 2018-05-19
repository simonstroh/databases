var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log("Serving request type " + req.method + " for url /classes" + req.url)
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
      models.users.post(res)
    }
  }
};
