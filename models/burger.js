// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    // orm.all executes SELECT * from cats
    //We pass in cats for tableInput, and we have our callback
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays. Create creates a new cat in the database.orm.create executes INSERT INTO cats
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  // Updates a cat within the database. orm.update executes UPDATE cats
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  // This deletes a cat from the database. orm.delete executes DELETE FROM cats
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
