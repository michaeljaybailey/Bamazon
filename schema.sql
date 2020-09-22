DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  primary key(item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Switch", "Video Games", 299.99, 350),
  ("Super Mario Odyssey", "Video Games", 49.99, 400),
  ("Set of Dumbbells", "Health and Fitness", 250.00, 40),
  ("Hydro Flask", "Health and Fitness", 35.00, 95),
  ("Lord of the Rings Trilogy Blue-Ray Set", "Films", 65.00, 60),
  ("Dog Bowl", "Pet Supplies", 20.00, 7),
  ("Joker Blue-Ray", "Films", 15.00, 25),
  ("Toshiba Microwave", "Appliances", 90.00, 75),
  ("Mini-Fridge", "Appliances", 200.00, 25),
  ("Grey Shirt", "Clothing", 5.55, 10);
