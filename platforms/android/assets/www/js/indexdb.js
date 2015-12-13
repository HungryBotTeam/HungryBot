var db = new PouchDB('http://localhost:5984/userdbnew');


$("#contact-form").on("submit", function(e) {
  e.preventDefault();
  username = $("#username").val();
  db.put({
  _id: 'mydoc',
  title: username,
}).then(function (response) {
  // handle response
}).catch(function (err) {
  console.log(err);
});

})
