const express = require("express");
const multer = require('multer');
const port = 5000;
const cors = require('cors');
const path = require('path');
const { db, auth, admin } = require('./config/firebase');

const upload = multer({ dest: 'uploads' });
 

const app = express();
app.use(cors());
app.use(express.json())


  app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


/*
const http = require('http');


var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World. Gabe is a bitch\n");
});
server.listen(4000);

*/