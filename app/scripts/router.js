import Backbone from 'backbone';
import $ from 'jquery';

import Session from './session';
import Message from './message';
import renderLogin from './login';
import renderChat from './chat';
import renderMessages from './rendermessage';


let session = new Session();

const routerSettings = {
    routes: {
        '': 'renderLogin',
        'chat': 'renderChat',
        'fail': 'renderFail',
        '*anything': 'render404'
    },
    renderLogin: () => {
      $('.header').empty();
      $('.chat-area').empty();
      $('.footer').empty();
      // console.log('rendering login');
      renderLogin(session);
    },
    renderChat: () => {
      $('.header').empty();
      $('.chat-area').empty();
      $('.footer').empty();
      // console.log('rendering chat');
      renderChat(session);
      renderMessages(session);
    },

    render404: () => {
      $('.header').empty();
      $('.chat-area').empty();
      $('.footer').empty();
      $('.chat-area').html('Page Not Available');
    }
};

const Router = Backbone.Router.extend(routerSettings);

var router = new Router();

export default router;
