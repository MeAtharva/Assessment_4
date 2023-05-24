const mysql = require("mysql");

//to connect to data base employeedb
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employeedb",
});

//To check server connected to data base employeedb or not
con.connect((err) => {
  if (err) {
    console.warn("error");
  } else {
    console.warn("connected");
  }
});

//Exproted module to use in index.js
module.exports = con;
