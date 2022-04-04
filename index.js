const db = require("./db/connection");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

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
        // view all employees
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
        // add a department
        if (answers.action === "Add Department") {
          return inquirer
            .prompt([
              {
                name: "department_name",
                type: "input",
                message: "What is your department name?",
              },
            ])
            .then((data) => {
              console.log(data.department_name);
              const sql4 = `INSERT INTO department (department_name)
            VALUES
            ("${data.department_name}");`;

              db.query(sql4, (err, data) => {
                if (err) console.log(err);
                return console.log("Department Added!");
              });
            });
        }
        // add a role
        if (answers.action === "Add Role") {
          return inquirer
            .prompt([
              {
                name: "role_name",
                type: "input",
                message: "What is your role name?",
              },
              {
                name: "salary",
                type: "input",
                message: "What is the salary of your role?",
              },
              {
                name: "department_id",
                type: "input",
                message: "What is the department ID for this role?",
              },
            ])
            .then((data) => {
              console.log(data.role_name);
              const sql5 = `INSERT INTO role (role_title, role_salary, department_id)
              VALUES
              ("${data.role_name}", ${data.salary}, ${data.department_id});`;

              db.query(sql5, (err, data) => {
                if (err) console.log(err);
                return console.log("Role Added!");
              });
            });
        }
        // add an employee
        if (answers.action === "Add Employee") {
          return inquirer
            .prompt([
              {
                name: "first_name",
                type: "input",
                message: "What is your employees first name?",
              },
              {
                name: "last_name",
                type: "input",
                message: "What is the employees last name?",
              },
              {
                name: "role_id",
                type: "input",
                message: "What is the role ID of your employee?",
              },
              {
                name: "manager_id",
                type: "input",
                message: "What is the manager ID of your employee?",
              },
            ])
            .then((data) => {
              console.log(data.first_name, data.last_name);
              const sql6 = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
              VALUES
              ("${data.first_name}", "${data.last_name}", ${data.role_id}, ${data.manager_id});`;
              db.query(sql6, (err, data) => {
                if (err) console.log(err);
                return console.log("Employee Added!");
              });
            });
        }
        // update employee role
        if (answers.action === "Update Employee Role") {
          return inquirer
            .prompt([
              {
                name: "employee_id",
                type: "input",
                message: "What is the ID of the employee you want to edit?",
              },
              {
                name: "new_role_id",
                type: "input",
                message: "What is the new role ID of your employee?",
              },
            ])
            .then((data) => {
              const sql7 = `UPDATE employee SET employee.role_id = ${data.new_role_id} WHERE employee.id = ${data.employee_id};`;

              db.query(sql7, (err, data) => {
                if (err) console.log(err);
                return console.table(data);
              });
            });
        }
      })
  );
};

promptUserQuestions();
