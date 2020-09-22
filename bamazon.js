var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
   
    password: "",
    database: "bamazon"
  });
  

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
    }
    connectProducts();
  });
  
  function connectProducts() {
      connection.query("SELECT * FROM products", function(err, red) {
          if (err) throw err;

          console.table(res);

          askItem(res);
      });
  }

  