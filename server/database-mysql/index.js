const { Promise } = require("bluebird");
const { append } = require("express/lib/response");
const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "password",
  database: "milk",
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

connection.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Conectado a MySQL server.");
});

let adminLogIn = () => {
  return db
    .queryAsync(`SELECT * FROM admin`)
    .then((response) => {
      return response[0];
    })
    .catch((error) => console.log(error));
};

let addAdmin = () => {
  return db
    .queryAsync()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

let createUser = (req, pass) => {
  // console.log(req.body);
  return db
    .queryAsync(
      `INSERT INTO ${req.body.role} (firstname, lastname, email, image, phonenumber, adress, password) VALUES ('${req.body.name}', '${req.body.last}', '${req.body.email}', '${req.body.photo}', ${req.body.phone}, '${req.body.adress}', '${pass}')`
    )
    .then((res) => console.log(res, "user created"))
    .catch((err) => console.log(err));
};

let userLogIn = (req, res) => {
  // console.log(req.query, "request here");
  return db
    .queryAsync(
      `SELECT * FROM ${req.query.role} WHERE email = '${req.query.email}'`
    )
    .then((response) => {
      return response[0];
    });
};

let selectVendorSummaryListe = (req, res) => {
  return db.queryAsync(
    `SELECT id,image,firstname,lastname from  fournisseur`
  ).then(
    (res) => console.log(res)
  ).catch((err) => console.log(err))
}

let getFournissurs = (req, res) => {
  return db.queryAsync(`SELECT * FROM fournisseur`).then((response) => {
    return response[0];
  });
};

let DeleteFr = (id) => {
  console.log("delete envoked", id);
  return db.queryAsync(`DELETE FROM fournisseur WHERE id = ${id}`);
};

module.exports = {
  connection,
  adminLogIn,
  createUser,
  addAdmin,
  userLogIn,
  getFournissurs,
  DeleteFr,
  selectVendorSummaryListe
};
