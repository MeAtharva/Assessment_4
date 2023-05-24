const con = require("../server/server");
const express = require("express");
const app = express();
app.use(express.json());

const blogic = require("../factory/blogic");

exports.get_all = async (req, res) => {
  try {
    const r = await blogic.mydata();
    res.send(r);
  } catch (err) {
    res.send(err);
  }
};

exports.get_one = async (req, res) => {
  const id = req.params.EmployeeID;
  try {
    const r = await blogic.mydata1(id);
    res.send(r);
  } catch (err) {
    res.send(err);
  }
};

exports.post_data = async (req, res) => {
  const data = req.body;
  try {
    const r = await blogic.postdata(data);
    res.send(r);
  } catch (err) {
    res.send(err);
  }
};

exports.edit_data = async (req, res) => {
  const data = [
    req.body.FirstName,
    req.body.Email,
    req.body.AddressLine,
    req.body.salary,
    req.params.EmployeeID,
  ];
  try {
    const r = await blogic.editdata(data);
    res.send(r);
  } catch (err) {
    res.send(err);
  }
};

exports.delete_data = async (req, res) => {
  const id = req.params.EmployeeID;
  try {
    const r = await blogic.deletedata(id);
    res.send(r);
  } catch (err) {
    res.send(err);
  }
};
