const express = require("express");

const app = express();
const Routes = require("./routes/employee");

//Using Routes
app.use("/employee", Routes);

//Listening on port 5000
app.listen(5000, () => console.log(`Listening on port 5000....`));
