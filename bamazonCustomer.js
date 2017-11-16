// require dotenv
const dotenv = require("dotenv").config({
    path: "key.env"
});

// require console.table
const table = require("console.table");

// require mysql and inquierer
const mysql = require("mysql2");
const inquirer = require("inquirer");

// connect to bamazonDB
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_Password,
    database: process.env.DATABASE
});

// greet visitor
console.log("Welcome to Bamazon!");

// display all of the items available for sale
function displayItems() {
    connection.query(
        "SELECT * FROM products",
        function (err, results) {
            if (err) {
                console.log(err);
            } else {

                console.table(results);
                questions();
            } // results contains rows returned by server
        }

    );
}

displayItems();

function questions() {
    inquirer.prompt([{
            type: "input",
            name: "itemInterested",
            message: "What is the Item ID of the product you would like to purchase?"
        },
        {
            type: "input",
            name: "itemAmount",
            message: "How many would you like to purchase?"
        }
    ]).then(function (answers) {
        console.log("made it!");
    })
}