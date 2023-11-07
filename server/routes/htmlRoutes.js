const path = require('path');
const router = require('express').Router();

// Define HTML routes

// Route to serve the main editor page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Add more routes as needed for different views or pages in your application

module.exports = router;
