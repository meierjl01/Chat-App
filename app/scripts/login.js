import $ from 'jquery';

function renderLogin(session) {
    var header = $('.header').append(`
        <h1> Welcome! </h1>
        <h2> Please login with your username below: </h2>
        `);
    var body = $('.chat-area').append(`
    <div>
      <input type="input" class ="input" name="input" placeholder="Username"></input>
      <button type="button" class="submit">Submit</button>
    </div>
    `);

    $('.submit').on('click', function(e) {
          var user = $('.input').val();
          // console.log(user);
          session.userName = user;
          location.hash = 'chat';
    });
    }
    export default renderLogin;
