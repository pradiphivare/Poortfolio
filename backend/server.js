// filepath: /backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Use an environment variable for the port, or fallback to 3000
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});
