const { Promise } = require("bluebird");
const { append } = require("express/lib/response");
const mysql = require("mysql");
//syntax works for inserting with a foregn key
// insert into lesAnalyses (humidite, ph, densite, acidite, aspeect_couleur, matiere_grasse, etat, fournisseur_id) values (1, 1, 1, 1, "aspect", 12, "etat",  1)

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "milk",
  timezone: "utc",
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
  return db
    .queryAsync(`SELECT id,image,firstname,lastname from  fournisseur`)
    .then((response) => {
      return response[0];
    })
    .catch((err) => {
      return err;
    });
};

let getFournissurs = (req, res) => {
  return db.queryAsync(`SELECT * FROM fournisseur`).then((response) => {
    return response[0];
  });
};

let DeleteFr = (id) => {
  console.log("delete envoked", id);
  return db.queryAsync(`DELETE FROM fournisseur WHERE id = ${id}`);
};

let GetUsers = (role) => {
  console.log("request sent");
  return db.queryAsync(`SELECT * FROM ${role}`).then((response) => response[0]);
};

let deleteUser = (role, id) => {
  return db.queryAsync(`DELETE FROM ${role} WHERE id = ${id}`);
};

let updateUser = (role, body) => {
  // console.log(role, body, "request handling in the database");

  return db.queryAsync(
    `UPDATE analyse SET firstname = "${body.firstname}", lastname = "${body.lastname}", email = "${body.email}", image = "${body.image}", phonenumber = ${body.phonenumber} WHERE id = ${body.id};`
  );
};

let getAanalyses = () => {
  return db
    .queryAsync(`SELECT * FROM lesAnalyses`)
    .then((response) => response[0]);
};

let deleteAnalyse = (id) => {
  console.log(id);
  return db.queryAsync(`DELETE FROM lesAnalyses WHERE id = ${id}`);
};

let getFactures = () => {
  return db
    .queryAsync(`SELECT * FROM lesFactures`)
    .then((response) => response[0]);
};

let addCamionInscription = (data) => {
  const { vendorId, registration, warblerDate, quantity } = data;
  return db.queryAsync(
    `INSERT INTO camion (vendorId, registration, warblerDate, quantity) VALUES ('${vendorId}', '${registration}', '${warblerDate}', '${quantity}')`
  );
};

let getCamionsList = (req, res) => {
  return db
    .queryAsync(
      `SELECT c.camionId, c.registration, c.warblerDate, c.quantity,  a.id  AS vendorId, CONCAT_WS(" ", a.firstName, a.lastName) AS fullName , a.image AS vendorPhotoUrl FROM camion c, fournisseur a where a.Id = c
  .vendorId`
    )
    .then((response) => {
      return response[0];
    });
};

let deleteCamion = (id) => {
  return db.queryAsync(`DELETE FROM camion WHERE camionId = ${id}`);
};

let updateCamion = (body) => {
  return db.queryAsync(
    `UPDATE camion SET vendorId = "${body.fournisseur}", registration = "${body.immatriculation}", warblerDate = "${body.date}", quantity = "${body.quantity}" WHERE camionId = ${body.camionId};`
  );
};

let getCamionsById = (id) => {
  return db
    .queryAsync(
      `SELECT c.camionId, c.registration, c.warblerDate, c.quantity,  a.id  AS vendorId, CONCAT_WS(" ", a.firstName, a.lastName) AS fullName , a.image AS vendorPhotoUrl FROM camion c, fournisseur a where a.Id = c
  .vendorId and c.camionId=${id}`
    )
    .then((response) => {
      return response[0];
    });
};
module.exports = {
  connection,
  adminLogIn,
  createUser,
  addAdmin,
  userLogIn,
  getFournissurs,
  DeleteFr,
  selectVendorSummaryListe,
  addCamionInscription,
  getCamionsList,
  deleteCamion,
  updateCamion,
  getCamionsById,
  GetUsers,
  deleteUser,
  updateUser,
  getAanalyses,
  deleteAnalyse,
  getFactures,
};
