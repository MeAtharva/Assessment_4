const con = require("../server/server");
const express = require("express");
const app = express();
app.use(express.json());

//business logic to get all data
const mydata = () => {
  return new Promise((resolve, reject) => {
    con.query("select * from employee", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

//business logic to get data by id
const mydata1 = (id) => {
  return new Promise((resolve, reject) => {
    con.query(
      "select * from employee where EmployeeID = " + id,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

//business logic to post data to dataset
const postdata = (data) => {
  return new Promise((resolve, reject) => {
    con.query("INSERT INTO employee SET ?", data, (err, result, fields) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

//business logic to edit data of dataset
const editdata = (data) => {
  return new Promise((resolve, reject) => {
    con.query(
      "UPDATE employee SET FirstName = ?,Email = ?,AddressLine = ?,salary = ? where EmployeeID = ?",
      data,
      (err, result, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

//business logic to delete data by id
const deletedata = (id) => {
  return new Promise((resolve, reject) => {
    con.query("DELETE FROM employee WHERE EmployeeID =" + id, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = {
  mydata: mydata,
  mydata1,
  postdata,
  editdata,
  deletedata,
};
