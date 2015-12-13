var display, unixtime;

unixtime = function() {
  return new Date().getTime() / 1000;
};

display = function(text) {
  return $("body").append("<p>" + text + "</p>");
};

$(function() {
  var db, name, started;
  started = unixtime();
  display("Creating a PouchDB database, and synchronising.");
  name = "_users";
  db = PouchDB(name);
  return db.replicate.from("http://127.0.0.1:5984/" + name, {
    live: true
  }).on("uptodate", function() {
    display("Synchronised successfully!");
    return display("That took " + (unixtime() - started) + " seconds.");
  });
});


$("#contact-form").on("submit", function(e) {

  console.log(e.target);
  e.preventDefault();
  username = $("#username").val();
  email = $("#email").val();
  password = $("#password").val();
  age = $("#age").val();
  gender = $("#gender").val();

  if(username === '' || email == '' || password == '' || age == ''){
    alert("Please fill all fields!");
  } else if ((password.length) < 8) {
    alert("Password should be atleast 8 character in length!");
  }
  else {
  db.post({
    "_id" : org.couchdb.username,
    "username": username,
    "email": email,
    "password": password,
    "age" : age,
    "gender" : gender,
    "type" : "user"
  });
} ;
//window.location.href = 'index.html';
});
