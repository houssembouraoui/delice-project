const express = require("express");
const app = express();
const port = 5000;
const path = require("path");
const crypto = require("crypto");

const cors = require("cors");
app.use(cors());

var connection = require("./database-mysql/index.js");
const { adminLogIn } = require("./database-mysql/index.js");

const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "deliceproject6@gmail.com",
    pass: "qifnirqlwejafkwz",
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/admin/login", (request, response) => {
  adminLogIn().then((result) => {
    let res = Object.values(JSON.parse(JSON.stringify(result)));

    response.send(res[0]);
  });
});

app.get("/test", (request, response) => {
  response.send("hello world");
});

app.delete("/delete/fournisseur/:id", (req, res) => {
  connection
    .DeleteFr(req.params.id)
    .then((res) => res.send(res))
    .catch((err) => err);
});

app.get("/user/login", (req, res) => {
  // let recieved = req.query;
  connection.userLogIn(req, res).then((result) => {
    let data = Object.values(JSON.parse(JSON.stringify(result)));
    res.send(data[0]);
    console.log(data[0], "something");
  });
});

app.post("/new/user", (req, res) => {
  let password = crypto.randomBytes(20).toString("hex");
  let details = {
    from: "'delice' deliceproject6@gmail.com",
    to: req.body.email,
    subject: "account created",
    text: `welcome to our app
    your default password is ${password}`,
  };

  connection
    .createUser(req, password)
    .then((result) => {
      mailTransporter.sendMail(details, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log(success);
        }
      });
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      } else {
      }
    });
});

app.post("/add/admin", (req, res) => {
  connection
    .addAdmin()
    .then((res) => console.log(res))
    .catch((err) => console.log("el fail"));
});

app.get("/fetch/fournisseurs", (req, res) => {
  connection
    .getFournissurs()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get("/fetch/vendorSummary", (req, res) => {
  connection
    .selectVendorSummaryListe()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.get("/fetch/CamionList", (req, res) => {
  connection
    .getCamionsList()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
app.get("/fetch/CamionById/:id", (req, res) => {
  connection
    .getCamionsById(req.params.id)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}); 

app.post("/Add/Camion", (req, res) => {
  connection
    .addCamionInscription(req.body)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});

app.delete("/delete/Camion/:id", (req, res) => {
  connection
    .deleteCamion(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.json("error"));
});

app.put(`/update/Camion`, (req, res) => {
  connection.updateCamion( req.body)
  .then((result) => res.json(result))
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
