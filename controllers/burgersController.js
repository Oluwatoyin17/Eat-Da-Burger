var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  // burger.all is referencing the burger object in the burger.js
  
  burger.all(function(data) {
    var hbsObject = {
      // data is the result from the callback function in burger.js
      // burgers: data
      burgers: data
    };
    console.log(hbsObject);
    // when rendering handlebars files, it needs to be coupled along with an object. hbsObject is the result from the cb in burger.js. The result is rendered onto the index.handlebar?!?!
    res.render("index", hbsObject);
  });
});
//This is a POST METHOD route for creating a new burger
router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
// PUT METHOD for updating a burger within the database
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
// The condition is the id of the burger to be updated 
  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
//DELETE METHOD for deleting a burger from the database
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
// The condition is the id of the burger to be deleted 
  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
