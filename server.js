// server.js
const express = require('express');
const app = express();

// Generate a random number from 1 to 100
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// API route to get the random number
app.get('/random-number', (req, res) => {
  const randomNumber = getRandomNumber();
  const response = {
    number: randomNumber
  };
  res.json(response);
});

// Serve the index.html file
app.use(express.static('public'));

// Start the server
const port = 3009;
app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}/`);
});
