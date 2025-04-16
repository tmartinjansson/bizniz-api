
import express from "express";
import { 
  getEmployees, 
  getEmployee, 
  createEmployee, 
  updateEmployee, 
  deleteEmployee 
} from "../controllers/employeeController.js";

const router = express.Router();

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

export default router;