DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;


CREATE TABLE employee (
 id INTEGER AUTO_INCREMENT PRIMARY KEY,
 first_name VARCHAR(30),
 last_name VARCHAR(30),
 role_id INTEGER,
 CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
 manager_id INTEGER,
 CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    role_title VARCHAR(30),
    role_salary DECIMAL(10,2),
    department_id INTEGER
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30)
);