const express = require("express");
const router = express.Router();
const { 
  getEmployees, 
  getEmployee, 
  createEmployee, 
  updateEmployee, 
  deleteEmployee 
} = require("../controllers/employeeController");

// Route to GET all employees
router.get("/", getEmployees);

// Route to GET a single employee
router.get("/:id", getEmployee);

// Route to CREATE a new employee
router.post("/", createEmployee);

// Route to UPDATE a employee
router.put("/:id", updateEmployee);

// Route to DELETE a employee
router.delete("/:id", deleteEmployee);

module.exports = router;