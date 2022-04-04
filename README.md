# MySQL Employee Tracker 

# Built With
- Node.js
- MySQL
- JavaScript
- Inquirer
- cTable

# Description
This is a simple command line application designed to keep track of employees. It uses databases to store and update employee information like employee IDs, salaries, departments, roles, and more. 

# Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)

# Installation
To install and use this application, clone this repository to your local machine. After it is cloned, open a command line from the root of the project. Next you'll want to login to your MySQL with `mysql -u root -p`, enter your password. In the MySQL terminal, run `USE employee_tracker;`. If there is no database found, create one by using `CREATE DATABASE employee_tracker;`, then try using the database again, if successful, run `SOURCE db/schema.sql` and `SOURCE db/seeds.sql`, now you can quit out of the MySQL terminal by running `quit;` Once done you must run `npm install` in the root of the directory to install required dependencies. Then start the app by running `node index.js`. From there, follow the command line prompts.

# Usage
[YouTube](https://www.youtube.com/watch?v=7CK5lI3lEHg)

# Made by
Tyler Sundquist
