// YOUR CODE HERE:

var notYourData = []

var app = {
  init: function() {

  },
  server: 'http://127.0.0.1:3000/classes/messages',
  send: function(message) {
    $.ajax({
      url: this.server,
      type: 'POST',
      json: message,
      contentType: 'application/json',
      success: function(data) {
        console.log("POSTED!");
      },
      error: function() {
        console.log("ERROR!");
      }
    })
  },
  fetch: function(data) {
    $.ajax({
      url: this.server,
      type: 'GET',
      success: function(data) {
        var parsed = data
        for (var i = 0; i < parsed.length; i++) {
          notYourData.push(parsed[i].roomname)
          app.renderMessage(parsed[i]);
        }
        app.renderRoom()
      }
    })
  },
  escapedText: function(input) {
    return input.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  },
  clearMessages: function() {
    $('#chats').children().remove();
  },
  renderMessage: function(message) {
    var escapedUsername = app.escapedText(message.username + '')
    var escapedMessage = app.escapedText(message.text + '')
    $('#chats').append(`<div><span onclick ="app.handleUsernameClick()" class="username">${escapedUsername}</span>: ${escapedMessage}</div>`);
  },
  renderRoom: function(roomname) {
    var uniqueData = _.uniq(notYourData)
    uniqueData.forEach(item => $('#roomSelect').append(`<option>${item}</option>`));
  },
  handleUsernameClick: function() {
    // this.friends.push(users)
  },
  handleSubmit: function() {
    var messageObject = {
      username: window.location.search.slice(window.location.search.indexOf('=') + 1, window.location.search.length),
      text: $('#message').val(),
      roomname: $('#roomSelect').val()
    };
    if (messageObject.text === "") {
      alert("You didn't send any messages!")
      return
    }
    var message = messageObject
    app.send(message);
    app.renderMessage(messageObject);
    $('#message').val('Write your message here')
  }
};
