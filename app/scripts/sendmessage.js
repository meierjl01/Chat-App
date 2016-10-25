import $ from 'jquery';
import Session from './session';
import Message from './message';

function sendMessages() {
    var ul = $('<ul class="messages"> All Messages:</ul>');
    var settings = {
        url: 'https://tiny-za-server.herokuapp.com/collections/to_do_list/',
        type: 'GET',
        success: function(data) {
            data.sort();
            data.forEach(function(item, i, arr) {
                var li = `<li><div>senderName, timestamp</div>
                          <div>body</div></li>`;
                ul.append(li);
            });
        }
    };
    $.ajax(settings);
    $('chat-area').prepend(ul);
}

export default sendMessages;
