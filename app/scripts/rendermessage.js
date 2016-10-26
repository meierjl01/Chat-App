import $ from 'jquery';
import Session from './session';
import Message from './message';

function renderMessages(session) {
    var ul = $('ul');
    var settings = {
        url: 'https://tiny-za-server.herokuapp.com/collections/chat_app/',
        type: 'GET',
        success: function(data) {
            data.sort();
            ul.empty();
            data.forEach(function(item, i, arr) {
                var newItem = new Message(item.senderName, item.body, item.timestamp);
                newItem._id = item._id;
                console.log(item);
                var li = $(`<li>
                                <div>Message:  "${item.body}"</div>
                                <div>Sender: ${item.senderName}</div>
                                <div>Sent on: ${moment(item.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</div>
                            </li>`);

                //ask if same user, let them delete, bind event listener to that message
                //create a button -- newItem.delete

                if (session.userName === item.senderName) {
                    var deleteButton = $(`<input class="delete-button" type="button" value="Delete">`);
                    li.append(deleteButton);
                    // console.log('hi');
                    deleteButton.on('click', function(e) {
                        e.preventDefault();
                        newItem.delete();
                        li.remove();
                    });
                }
                ul.prepend(li);
            });
        }
    };
    $.ajax(settings);
}

//set interval -- tried this in multiple places and it gives me errors.
// setInterval(function() {
//     renderMessages();
// }, 1000);

export default renderMessages;
