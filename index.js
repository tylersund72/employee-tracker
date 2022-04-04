const db = require("./db/connection");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

const promptUserQuestions = () => {
  return inquirer.prompt([
    {
      name: "action",
      type: "list",
      message: "Please select an option from below",
      choices: [
        "View all Departments",
        "View all Roles",
        "View all Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
      ],
    },
  ]);
};

promptUserQuestions();
