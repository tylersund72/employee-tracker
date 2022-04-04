-- DROP TABLE IF EXISTS employee;
-- DROP TABLE IF EXISTS role;
-- DROP TABLE IF EXISTS department;


CREATE TABLE employee (
 id INTEGER AUTO_INCREMENT PRIMARY KEY,
 first_name VARCHAR(30),
 last_name VARCHAR(30),
 role_id INT,
 manager_id INT,
 FOREIGN KEY (role_id) REFERENCES role(role_id) ON DELETE SET NULL,
 FOREIGN KEY (manager_id) REFERENCES employee(employee_id) ON DELETE SET NULL
);

CREATE TABLE role (
    role_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    role_title VARCHAR(30),
    role_salary DECIMAL(10,2),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(department_id) ON DELETE SET NULL
);

CREATE TABLE department (
  department_id INTEGER AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);