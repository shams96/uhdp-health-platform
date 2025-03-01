const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));

// Serve the main HTML file for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
