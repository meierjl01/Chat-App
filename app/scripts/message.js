import $ from 'jquery';
import Session from './session';
import renderChat from './chat';
import renderMessages from './rendermessage';


function Message(senderName, body, timestamp) {
  'use strict';
  this.senderName = senderName;
  this.body = body;
  this.timestamp = timestamp;
  return this;
}

Message.prototype.save = function() {
  var settings = {
    url: 'https://tiny-za-server.herokuapp.com/collections/chat_app',
    type: 'POST',
    success: function(data) {
      renderMessages();
      console.log('successful save');
    },
    contentType: 'application/json',
    data: JSON.stringify(this)
  };
  $.ajax(settings);
};

Message.prototype.delete = function() {
  var settings = {
    url: 'https://tiny-za-server.herokuapp.com/collections/chat_app/' + this._id,
    type: 'DELETE',
    success: function(data) {
      console.log('successful delete');
    }
  };
  $.ajax(settings);
};


export default Message;
