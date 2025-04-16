// Create a new file at /api/company.js
// This will handle /api/company requests
const app = require('../index');

module.exports = (req, res) => {
  // Forward the request to your Express app
  return app(req, res);
};