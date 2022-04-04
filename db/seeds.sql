INSERT INTO department (department_name)
VALUES
('Sales'),
('Engineering'),
('Science'),
('Boss');

INSERT INTO role (role_title, role_salary, department_id)
VALUES
('Salespeople', 60000, 1),
('Engineer', 100000, 2),
('Chemist', 140000, 3),
('CEO', 300000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('James', 'Smith', 1, 1),
('Alexis', 'Sondra', 2, 2),
('Alysa', 'Sullivan', 3, 3),
('Zach', 'Albert', 4, 4),
('Oakley', 'Weston', 1, 1);