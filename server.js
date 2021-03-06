const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
console.log(__dirname + '/dist/rebel-fe');
app.use(express.static(__dirname + '/dist/rebel-fe'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/rebel-fe/index.html'));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);