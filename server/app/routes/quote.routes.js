module.exports = app => {
    const quotes = require("../controllers/quote.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Quote
    router.post("/", quotes.create);
  
    // Retrieve all Quotes
    router.get("/", quotes.findAll);
  
    // Retrieve a single Quote with id
    router.get("/:id", quotes.findOne);
  
    app.use('/api/quotes', router);
  };