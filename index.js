const db = require("./db/connection");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const { resolve } = require("path");
const { rejects } = require("assert");

const promptUserQuestions = () => {
  return (
    inquirer
      .prompt([
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
      ])
      // view all departments
      .then((answers) => {
        console.log(answers);
        if (answers.action === "View all Departments") {
          const sql = `SELECT * FROM department`;
          db.query(sql, (err, data) => {
            if (err) console.log(err);
            return console.table(data);
          });
        }
        // view all roles
        if (answers.action === "View all Roles") {
          const sql2 = `SELECT role.id, role.role_title, role.role_salary, department.department_name AS department_name
          FROM role
          JOIN department 
          ON role.department_id =  department.id;`;

          db.query(sql2, (err, data) => {
            if (err) console.log(err);
            return console.table(data);
          });
        }
      })
  );
};

promptUserQuestions();
