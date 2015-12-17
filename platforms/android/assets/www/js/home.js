var db = new PouchDB('http://localhost:5984/kittens');
db.info().then(function (info) {
  document.getElementById('display').innerHTML = 'We have a database: ' + JSON.stringify(info);
});
