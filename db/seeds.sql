INSERT INTO employee (employee_id, first_name, last_name, role_id, manager_id)
VALUES
(1, 'James', 'Smith', 1, 1),
(2, 'Alexis', 'Sondra', 2, 2),
(3, 'Alysa', 'Sullivan', 3, 3),
(4, 'Zach', 'Albert', 4, 4),
(5, 'Oakley', 'Weston', 5, 5)

INSERT INTO role (role_id, role_title, role_salary, department_id)
VALUES
(1, 'Salespeople', 60000, 1),
(2, 'Engineer', 100000, 2),
(3, 'Chemist', 140000, 3),
(4, 'CEO', 300000, 4)

INSERT INTO department (department_id, department_name)
VALUES
(1, 'Sales'),
(1, 'Engineering'),
(1, 'Science'),
(1, 'Boss'),
