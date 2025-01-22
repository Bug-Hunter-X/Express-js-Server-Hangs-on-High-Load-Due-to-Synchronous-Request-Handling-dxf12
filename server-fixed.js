const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation using promises
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello from Express!');
    }, 5000); // Wait for 5 seconds
  })
  .then((message) => {
    res.send(message);
  })
  .catch((error) => {
    console.error('Error processing request:', error);
    res.status(500).send('Internal Server Error');
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});