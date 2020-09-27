-- 
USE employee_trackerDB;

INSERT INTO `employee_trackerDB`.`department` (`id`, `name`) VALUES ('1', 'Accounting');
INSERT INTO `employee_trackerDB`.`department` (`id`, `name`) VALUES ('2', 'Legal');
INSERT INTO `employee_trackerDB`.`department` (`id`, `name`) VALUES ('3', 'Maintenance');
INSERT INTO `employee_trackerDB`.`department` (`id`, `name`) VALUES ('4', 'Vendor Mangement');

INSERT INTO `employee_trackerDB`.`employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('1', 'Matthew ', 'Jones', '1', '1');
INSERT INTO `employee_trackerDB`.`employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('2', 'Andrew', 'Tayler', '2', '2');
INSERT INTO `employee_trackerDB`.`employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('3', 'Ashley ', 'Springer', '3', '3');
INSERT INTO `employee_trackerDB`.`employee` (`id`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('4', 'Tom', 'Willard', '4', '4');




INSERT INTO `employee_trackerDB`.`employe_role` (`id`, `title`, `salary`, `department_id`) VALUES ('2', 'contract', '75000.00', '2');
UPDATE `employee_trackerDB`.`employe_role` SET `title` = 'Staff Accountant' WHERE (`id` = '1');
INSERT INTO `employee_trackerDB`.`employe_role` (`id`, `title`, `salary`, `department_id`) VALUES ('3', 'Maintenance Supervisor', '70000.00', '3');
INSERT INTO `employee_trackerDB`.`employe_role` (`id`, `title`, `salary`, `department_id`) VALUES ('4', 'Vendor Manager', '90000.00', '4');





INSERT INTO `employee_trackerDB`.`allEmployee` (`id`, `first_name`, `last_name`, `role_id`, `department_Name`) VALUES ('1', 'Matthew', 'Jones', '1', 'Accounting');
INSERT INTO `employee_trackerDB`.`allEmployee` (`id`, `first_name`, `last_name`, `role_id`, `department_Name`) VALUES ('2', 'Andrew', 'Tayler', '2', 'Legal');
INSERT INTO `employee_trackerDB`.`allEmployee` (`id`, `first_name`, `last_name`, `role_id`, `department_Name`) VALUES ('3', 'Ashley', 'Springer', '3', 'Maintenance');
INSERT INTO `employee_trackerDB`.`allEmployee` (`id`, `first_name`, `last_name`, `role_id`, `department_Name`) VALUES ('4', 'Tom', 'Willard', '4', 'Vendor Mangement');








-- INSERT INTO `employee_trackerDB`.`employe_role` (`id`, `title`, `salary`, `department_id`) VALUES 
-- ('1', 'bean counter', '95000.00', '1');
-- INSERT INTO `employee_trackerDB`.`employe_role` (`id`, `title`, `salary`, `department_id`) VALUES 
-- ('2', 'paper pusher', '65000.00', '2');
