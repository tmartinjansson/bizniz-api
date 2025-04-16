// Serverless function entry point for Vercel
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import companyRoutes from "../routes/companyRoutes.js";
import employeeRoutes from "../routes/employeeRoutes.js";

dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(cors({
  origin: ["https://bizniz-admin.vercel.app", "http://localhost:3000"],
  credentials: true
}));

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
app.use("/api/employees", employeeRoutes);

// Test route
app.get("/api", (req, res) => {
  res.send("Bizniz API is running 🚀");
});

// Export for Vercel
export default app;