import $ from 'jquery';

function renderChat (session) {
  var greeting = `Welcome, ${session.userName}!`;
  $('.header').append(greeting);

}

export default renderChat;
