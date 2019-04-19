var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazondb"
});
connection.connect();

function display() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    console.log("-------------------------------");
    console.log("Please Select a Product by ID");
    console.log("-------------------------------");
    var table = new Table({
      head: ['id', 'product_name', 'dept_name', 'price', 'qty'],
      colWidths: [8, 30, 14, 9, 10],
    });
    for (var i = 0; i < res.length; i++) {
      table.push([res[i].id, res[i].product_name, res[i].dept_name, "$" + res[i].price, res[i].qty]);
    }
    console.log(table.toString());
    console.log("")

    //start inquirer
    inquirer.prompt([{
          type: "input",
          message: "Please Select Product By ID :",
          name: "id",
        },
        {
          type: "input",
          message: "Now Choose Quantity :",
          name: "qty",
          validate: function (val) {
            if (!isNaN(val)) {
              return true
            }
            return false
          }
        }
      ])
      .then(function (iResponse) {
        var errorThing;
        for (var j = 0; j < res.length; j++) {
          if (res[j].id === parseInt(iResponse.id)) {
            errorThing = res[j]
          }
        }
        if (errorThing.qty >= parseInt(iResponse.qty)) {
          var newQty = errorThing.qty - parseInt(iResponse.qty)
          console.log("Your Order Was Placed Successfully!")
          // inquirer response
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [{
                qty: newQty
              },
              {
                id: errorThing.id
              }
            ],
            function (err, res) {
              if (err) throw err;
            }
          )
        } else {
               console.log("not enough qty or wrong id")
        }

      });
  });
}

display();