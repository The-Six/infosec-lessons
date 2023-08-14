const express = require('express');
const app = express();
//this lets me use the node module helmetJS and the correlating methods responsible for security. 
let helmet = require('helmet')
//this hides powered by express from malicious actors.
app.use(helmet.hidePoweredBy())
//this prevents hackers from injecting an iframe to imitate my website, which is used to extract info from a user.
app.use(helmet.frameguard({ action: 'deny' }))
//this prevents hackers from injecting code into the header. 
app.use(helmet.xssFilter())
















































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
