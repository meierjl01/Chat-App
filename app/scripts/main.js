import $ from 'jquery';
import _ from 'underscore';

import Session from './session';
import Message from './message';
import renderLogin from './login';
import renderChat from './chat';
import renderSendMessage from './sendmessage';


function handleHashChange(e) {
  let location = window.location.hash;
  if (location === '') {
    renderLogin();
  } else if (location === '#chat') {
    //empty here or in render function?
    $('.header').empty();
    $('.chat-area').empty();
    renderChat();
  }
}

$(window).on('hashchange', handleHashChange);
