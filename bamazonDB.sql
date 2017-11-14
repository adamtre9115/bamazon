-- if database exists drop it --
DROP DATABASE IF EXISTS bamazon;

-- create bamazon database --
CREATE DATABASE bamazon;

-- select bamazon database for use --
USE bamazon;

-- create products table --
CREATE TABLE products (
	item_id INTEGER PRIMARY KEY AUTO_INCREMENT NULL,
    product_name TEXT NOT NULL,
    department_name TEXT NOT NULL,
    price DECIMAL NOT NULL,
    stock_quantity INTEGER
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (
	"Samsung Gear S3 Frontier",
	"Tech",
    349.99,
    15
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (
	"Samsung Gear S3 Classic",
	"Tech",
    349.99,
    20
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (
	"Keurig K50 Coffee Maker",
	"Kitchen Appliances",
    69.99,
    8
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (
	"Ninja Supra Kitchen Blender System with Food Processor",
	"Kitchen Appliances",
    149.00,
    8
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (
	"MOHOO 4Pcs/set Red Wine Dessert Fruit Canvas Art Oil Painting",
	"Home Decor",
    12.89,
    4
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (
	"Westclox 32032a 12 Live, Love, Laugh Wall Clock",
	"Home Decor",
    10.85,
    7
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (
	"Colgate Total Lasting White Mouthwash",
	"Personal Care",
    7.65,
    5
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (
	"Crest Pro-Health Multi-Protection Refreshing Clean Mint Flavor Mouthwash",
	"Personal Care",
    9.40,
    5
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (
	"Colgate 360 Toothbrush, Medium, 4 count",
	"Personal Care",
    9.00,
    6
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES (
	"Reach Advanced Design Toothbrushes, Soft, 7 ct",
	"Personal Care",
    7.12,
    6
);

