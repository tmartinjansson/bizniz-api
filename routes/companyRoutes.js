
import express from "express";
import { 
  getCompanies,
  getCompany,
  createCompany,
  updateCompany,
  deleteCompany 
} from "../controllers/companyController.js";

const router = express.Router();

// Route to GET all companies
router.get("/", getCompanies);

// Route to GET a single company
router.get("/:id", getCompany);

// Route to CREATE a new company
router.post("/", createCompany);

// Route to UPDATE a company
router.put("/:id", updateCompany);

// Route to DELETE a company
router.delete("/:id", deleteCompany);

export default router;