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
        if (answers.action === "View all Employees") {
          const sql3 = `SELECT employee.id, employee.first_name, employee.last_name, role.role_title AS title, department.department_name AS department, role.role_salary AS salary, CONCAT(mngr.first_name, ' ', mngr.last_name, ' ') AS manager
          FROM employee
          JOIN role
          ON employee.role_id = role.id
          JOIN department
          ON role.department_id = department.id
          LEFT JOIN employee AS mngr
          ON employee.manager_id = mngr.id
          ORDER BY employee.id`;

          db.query(sql3, (err, data) => {
            if (err) console.log(err);
            return console.table(data);
          });
        }
        if (answers.action === "Add Department") {
          return inquirer
            .prompt([
              {
                name: "departmentName",
                type: "input",
                message: "What is your department name?",
              },
            ])
            .then((data) => {
              console.log(data.departmentName);
              const sql4 = `INSERT INTO department (department_name)
            VALUES
            ("${data.departmentName}");`;

              db.query(sql4, (err, data) => {
                if (err) console.log(err);
                return console.log("Department Added!");
              });
            });
        }
        if (answers.action === "Add Role") {
          const sql5 = `SELECT role.id, role.role_title, role.role_salary, department.department_name AS department_name
          FROM role
          JOIN department 
          ON role.department_id =  department.id;`;

          db.query(sql5, (err, data) => {
            if (err) console.log(err);
            return console.table(data);
          });
        }
        if (answers.action === "Add Employee") {
          const sql6 = `SELECT role.id, role.role_title, role.role_salary, department.department_name AS department_name
          FROM role
          JOIN department 
          ON role.department_id =  department.id;`;

          db.query(sql6, (err, data) => {
            if (err) console.log(err);
            return console.table(data);
          });
        }
        if (answers.action === "Update Employee Role") {
          const sql7 = `SELECT role.id, role.role_title, role.role_salary, department.department_name AS department_name
          FROM role
          JOIN department 
          ON role.department_id =  department.id;`;

          db.query(sql7, (err, data) => {
            if (err) console.log(err);
            return console.table(data);
          });
        }
      })
  );
};

promptUserQuestions();
