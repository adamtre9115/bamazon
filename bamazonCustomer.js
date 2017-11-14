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
console.log("Welcome to Bamazon!");

// display all of the items available for sale
connection.query(
    "SELECT * FROM products",
    function (err, results) {
        if (err) {
            console.log(err);
        } else {
            for (var i = 0; i < results.length; i++) {
                console.log(
                    "Product: " + results[i].product_name + "\n" +
                    " Department: " + results[i].department_name + "\n" +
                    " Price: $" + results[i].price
                );
            } // results contains rows returned by server
        }

    }
);