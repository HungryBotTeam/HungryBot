
username = $("#username").val();
email = $("#email").val();
password = $("#password").val();
age = $("#age").val();
gender = $("#gender").val();

$("#contact-form").on("submit", function(e) {

  db.signup($("#username").val(), $("#password").val(), function (err, response) {
    if (err) {
      if (err.name === 'conflict') {
        console.log("I'm Batman.");
        // "batman" already exists, choose another username
      } else if (err.name === 'forbidden') {
        // invalid username
        console.log("I'm Batman.2");
      } else {
        // HTTP error, cosmic rays, etc.
      }
    }
  });
  db.getSession(function (err, response) {
    if (err) {
      // network error
    } else if (!response.userCtx.name) {
      // nobody's logged in
    } else {
      // response.userCtx.name is the current user
    }
  });

});
