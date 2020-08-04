DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department(
id INT NOT NULL,
name VARCHAR(30),
primary key (id)
);
CREATE TABLE employee(
id INT NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT NOT NULL,
manager_id INT NOT NULL
);
CREATE TABLE employe_role(
id INT NOT NULL,
title VARCHAR(30),
salary DECIMAL,
department_id INT NOT NULL
);
