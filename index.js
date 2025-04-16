const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Initialize app first
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ["https://bizniz-admin.vercel.app", "http://localhost:3000"],
  credentials: true
}));

app.use(express.json());

// Import routes
const companyRoutes = require("./routes/companyRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Register routes
app.use("/api/companies", companyRoutes);
app.use("/api/employees", employeeRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Bizniz API is running 🚀");
});

// Export for Vercel
module.exports = app;

// Start server
// For local development only
// if (process.env.NODE_ENV !== "production") {
//  const PORT = process.env.PORT || 5000;
//  app.listen(PORT, () => {
//    console.log(`🌍 Server is running on http://localhost:${PORT}`);
//  });