const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());

// Serve static files (e.g., CSS, JavaScript) from the 'client/dist' directory
app.use(express.static('../client/dis'));

app.use(express.urlencoded({ extended: true }));

// Define your API routes here if needed
// Example: app.use('/api', require('./routes/apiRoutes'));

// Define your HTML routes here to serve your client-side views
app.use('/', require('./routes/htmlRoutes'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
