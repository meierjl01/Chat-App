import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import router from './router';
import Session from './session';
import Message from './message';
import renderLogin from './login';
import renderChat from './chat';
import renderMessages from './rendermessage';


Backbone.history.start();
