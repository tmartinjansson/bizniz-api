const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const companyRoutes = require("./routes/companyRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Register routes
app.use("/api/companies", companyRoutes);

  // Register routes

  app.use("/api/employees", employeeRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Bizniz API is running 🚀");


});

// Start server
app.listen(PORT, () => {
  console.log(`🌍 Server is running on http://localhost:${PORT}`);
});



