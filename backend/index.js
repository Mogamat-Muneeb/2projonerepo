// Import Express
const express = require("express");
const cors = require("cors");
// Create Express app
const app = express();
app.use(express.json());
app.use(cors());
// Define a route
app.get("/", (req, res) => {
  res.send("Hello, Worldddd 😂 working asshole!");
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
