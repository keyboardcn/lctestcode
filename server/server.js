const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const bodyParser = require('body-parser');
const cors = require("cors");

const schema = require('./app/schema/schema');

const app = express();

// allow only access from "http://localhost:3000" client
// sometimes http://localhost not work
var corsOptions = {
  origin: "http://0.0.0.0",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// graphql midware
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const { db } = require("./app/models");

db.sequelize.sync();
// db.sequelize.sync({force: true}).then(() => {
//   console.log("Drop and re-sync db.");
// });


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to server." });
});


require("./app/routes/quote.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
