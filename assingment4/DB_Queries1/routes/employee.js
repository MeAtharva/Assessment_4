const express = require("express");
const router = express.Router();

const empcontroller = require("../Controller/employee");
router.use(express.json());

//To get all employee data
router.get("/", empcontroller.get_all);

//To get employee data by EmployeeID
router.get("/:EmployeeID", empcontroller.get_one);

//To add new employee to employee table in employedb database
router.post("/", empcontroller.post_data);

//To to update employee data
router.put("/:EmployeeID", empcontroller.edit_data);

//To delete employee data
router.delete("/:EmployeeID", empcontroller.delete_data);

module.exports = router;
