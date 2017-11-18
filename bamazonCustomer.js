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




// display all of the items available for sale
function displayItems() {
    connection.query(
        "SELECT * FROM products",
        function (err, results) {
            if (err) {
                console.log(err);
            } else {
                products = results;
                console.table(results);
                promptPurchase();
            } // results contains rows returned by server
        }

    );
}



function promptPurchase() {
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
        var selectedID = answers.itemInterested;
        var selectedAmt = answers.itemAmount;

        // search table for selected item
        connection.query(
            'SELECT * FROM products WHERE ?', {
                item_id: selectedID
            },
            function (err, data) {
                if (err) {
                    console.log(err);
                }
                // if item isn't present enter valid item
                if (data.length === 0) {
                    console.log("Please enter a valid item");
                    displayItems();

                    // product is equal to selected item
                } else {
                    var productD = data[0];
                }

                // is there enough in stock
                if (selectedAmt <= productD.stock_quantity) {
                    console.log("We have exactly what you're looking for!");
                    var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productD.stock_quantity - selectedAmt) + ' WHERE item_id = ' + selectedID;

                    // Update the inventory
                    connection.query(updateQueryStr, function (err, data) {
                        if (err) {
                            console.log(err);
                        }

                        console.log("We've placed your order! Your total is $" + productD.price * selectedAmt);

                        // End the database connection
                        connection.end();
                    })
                } else {
                    console.log("I'm sorry to say we just don't have enough right now... Please modify your order.");
                    displayItems();
                }
            }
        )
    })
}

function runIt() {
    // greet visitor
    console.log("Welcome to Bamazon!");

    displayItems();
}

runIt();