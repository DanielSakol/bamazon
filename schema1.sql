DROP DATABASE if exists bamazondb;
CREATE DATABASE bamazondb;
USE bamazondb;

CREATE TABLE products (
	 id INTEGER(4) AUTO_INCREMENT NOT NULL,
     product_name VARCHAR(100) NOT NULL,
     dept_name VARCHAR(30) NOT NULL,
     price DECIMAL(10,2) NOT NULL,
     qty INTEGER(20),
     PRIMARY KEY (id)
);

INSERT INTO products (product_name, dept_name, price, qty)
VALUES ("Signed Michael Jordan Jersey", "Clothing", 665.25, 1);
INSERT INTO products (product_name, dept_name, price, qty)
VALUES ("Sour Patch Kids 5lb", "Food", 21.99, 50);
INSERT INTO products (product_name, dept_name, price, qty)
VALUES ("Roxy Music - Avalon", "Music/CD's", 9.99, 20);
INSERT INTO products (product_name, dept_name, price, qty)
VALUES ("Oasis - Heathen Chemistry", "Music/CD's", 8.99, 12);
INSERT INTO products (product_name, dept_name, price, qty)
VALUES ("Love and Rockets - Express", "Music/CD's", 10.99, 11);
INSERT INTO products (product_name, dept_name, price, qty)
VALUES ("Pulp - Different Class", "Music/CD's", 11.99, 22);
INSERT INTO products (product_name, dept_name, price, qty)
VALUES ("David Bowie - Low", "Music/CD's", 9.99, 23);
INSERT INTO products (product_name, dept_name, price, qty)
VALUES ("American Psycho", "Blu-ray DVD", 11.99, 16);
INSERT INTO products (product_name, dept_name, price, qty)
VALUES ("The Departed", "Blu-ray DVD", 9.99, 3);



SELECT * FROM products