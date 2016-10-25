import $ from 'jquery';
import Session from './session';
import Message from './message';

function renderChat(session) {
    var greeting = `Welcome, ${session.userName}!`;
    $('.header').append(greeting);

    var writeMessage = $(`
    <form>
    <ul>All Messages</ul>
    <div><input class ="message" type="text" placeholder="New Message"></div>
    <div><input class="submit" type="submit" value="Submit"></div>
    </form>
  `);
    $('.chat-area').append(writeMessage);
    writeMessage.find('.submit').on('click', function(e) {
      e.preventDefault();
      var body = writeMessage.find('.message').val();
      let newMessage = new Message(session.userName, body, new Date());
      console.log('clicked button');
      // window.alert('Your message has been saved');
      newMessage.save();
    });
}

export default renderChat;
