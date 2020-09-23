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

  function askItem(inventory) { 
      
    inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "What is the ID of the item you would you like to purchase? [Quit with Q]",
        validate: function(val) {
          return !isNaN(val) || val.toLowerCase() === "q";
        }
      }
    ])
    .then(function(val) {
      
      checkIfShouldExit(val.choice);
      var choiceId = parseInt(val.choice);
      var product = checkInventory(choiceId, inventory);

     
      if (product) {
        
        askQuantity(product);
      }
      else {
        
        console.log("\nThat item is not in the inventory.");
        connectProducts();
      }
    });
}

function askQuantity(product) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "quantity",
          message: "How many would you like? [Quit with Q]",
          validate: function(val) {
            return val > 0 || val.toLowerCase() === "q";
          }
        }
      ])
      .then(function(val) {
        
        checkIfShouldExit(val.quantity);
        var quantity = parseInt(val.quantity);
  
        
        if (quantity > product.stock_quantity) {
          console.log("\nNot Enough Product Available!");
          loadProducts();
        }
        else {
          
          Purchase(product, quantity);
        }
      });
  }
  


  