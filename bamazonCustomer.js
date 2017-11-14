// require mysql and inquierer
const mysql = require("mysql2");
const inquirer = require("inquirer");

// connect to bamazonDB
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bamazon'
});

// greet visitor
console.log("Thank you for visiting Bamazon!");

// display all of the items available for sale
connection.query(
    "SELECT * FROM products",
    function (err, results) {
        if (err) {
            console.log(err);
        } else {
            console.log(results); // results contains rows returned by server
        }

    }
);