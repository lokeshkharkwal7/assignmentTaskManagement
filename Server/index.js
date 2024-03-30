const express = require("express");
let cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


// importing config files
const mongoConnect = require("./connect");
mongoConnect(); // Invoke the function to connect to MongoDB

const task = require("./routes/tasks");
// calling routes

app.use("/", task);

// listening port
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
