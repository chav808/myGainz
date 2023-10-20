const express = require("express");
const port = 5000;
const cors = require('cors');
const path = require('path');
const { db, auth, admin } = require('./config/firebase');
 

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/auth/register', async (req, res) => {
  try{
    const newUser = {
      ...req.body,
      
    }
    
    const userRef = db.collection('Users');
    const userDocRef = await userRef.add(newUser);
    
    console.log("User added successfully");
    res.json({ id: userDocRef.id, data: newUser})
  }catch (error) {
    res.status(400).send(error.message);
  }

})

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  User = auth.User;

  // Check if the user exists and the password matches
  User.findOne({ email }, (err, user) => {
    if (err) {
      console.error('Error finding user:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    if (!user.verifyPassword(password)) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = generateToken(user);

    res.status(200).json({ token });
  });
});

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