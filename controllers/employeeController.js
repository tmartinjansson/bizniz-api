const Employee = require("../models/Employee");

// GET all employees
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().sort({ createdAt: -1 });
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch employees", error: err.message });
  }
};

// GET single employee
const getEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch employee", error: err.message });
  }
};

// POST a new employee
const createEmployee = async (req, res) => {
  console.log("Received employee data:", req.body);
  const { surname, name, location, salary, competence, company } = req.body;

  if (!surname || !name || !company) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  try {
    const newEmployee = new Employee({
      surname,
      name,
      location,
      salary,
      competence,
      company
    });
    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (err) {
    res.status(500).json({ message: "Failed to create employee", error: err.message });
  }
};

// UPDATE employee
const updateEmployee = async (req, res) => {
  try {
    const { surname, name, location, salary, competence, company } = req.body;
    
    if (!surname || !name || !company) {
      return res.status(400).json({ message: "Required fields missing" });
    }
    
    // Create update object with all fields, including empty ones
    // This ensures fields are explicitly cleared when empty strings are sent
    const updateData = {
      surname,
      name,
      location,
      salary, 
      competence,
      company,
      updatedAt: Date.now()
    };
    
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    
    res.status(200).json(updatedEmployee);
  } catch (err) {
    res.status(500).json({ message: "Failed to update employee", error: err.message });
  }
};

// DELETE employee
const deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    
    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete employee", error: err.message });
  }
};

module.exports = {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
};