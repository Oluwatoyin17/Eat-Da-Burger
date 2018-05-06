// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    // orm.all executes SELECT * from burgers
    //We pass in burgers for tableInput, and we have our callback
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays. Create creates a new burger in the database.orm.create executes INSERT INTO burgers
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  // Updates a burger within the database. orm.update executes UPDATE burgers
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  // This deletes a burger from the database. orm.delete executes DELETE FROM burgers
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
