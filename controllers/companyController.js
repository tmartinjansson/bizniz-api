// companyController.js - Updated to ES Modules
import Company from "../models/Company.js";  // Note the .js extension

// GET all companies
export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find().sort({ createdAt: -1 });
    res.status(200).json(companies);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch companies", error: err.message });
  }
};

// GET single company
export const getCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch company", error: err.message });
  }
};

// POST a new company
export const createCompany = async (req, res) => {
  console.log("Received company data:", req.body);
  const { name, industry, location, contractLevel, contractLength } = req.body;

  if (!name || !contractLevel || !contractLength) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  try {
    const newCompany = new Company({ name, industry, location, contractLevel, contractLength });
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (err) {
    res.status(500).json({ message: "Failed to create company", error: err.message });
  }
};

// UPDATE company
export const updateCompany = async (req, res) => {
  try {
    const { name, industry, location, contractLevel, contractLength } = req.body;
    
    if (!name || !contractLevel || !contractLength) {
      return res.status(400).json({ message: "Required fields missing" });
    }
    
    // Create update object with all fields, including empty ones
    // This ensures fields are explicitly cleared when empty strings are sent
    const updateData = {
      name,
      industry,
      location,
      contractLevel, 
      contractLength,
      updatedAt: Date.now()
    };
    
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!updatedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }
    
    res.status(200).json(updatedCompany);
  } catch (err) {
    res.status(500).json({ message: "Failed to update company", error: err.message });
  }
};

// DELETE company
export const deleteCompany = async (req, res) => {
  try {
    const deletedCompany = await Company.findByIdAndDelete(req.params.id);
    
    if (!deletedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }
    
    res.status(200).json({ message: "Company deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete company", error: err.message });
  }
};