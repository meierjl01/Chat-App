import $ from 'jquery';
import Session from './session';
import renderChat from './chat';
import sendMessage from './sendmessage';


function Message(senderName, body, timestamp) {
  'use strict';
  this.senderName = senderName;
  this.body = body;
  this.timestamp = timestamp;
}

Message.prototype.save = function() {
  var settings = {
    url: 'https://tiny-za-server.herokuapp.com/collections/chat_app',
    type: 'POST',
    success: function(data) {
      //append somewhere in the body -- rendermessage function
      sendMessage();
      console.log('successful save');
    },
    contentType: 'application/json',
    data: JSON.stringify(Message)
  };
  $.ajax(settings);
};

Message.prototype.delete = function() {
  var itemID = location.hash.split('/');
  var settings = {
    url: 'https://tiny-za-server.herokuapp.com/collections/chat_app/' + itemID[1],
    type: 'DELETE',
    success: function(data) {
      location.hash = '';
      console.log('successful delete');
    }
  };
  $.ajax(settings);
};


export default Message;
