import axios from "axios";
import React, { useEffect, useState } from "react";
const AddUser = (props) => {
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState({});
  const [phone, setPone] = useState({});
  const [role, setRole] = useState("");
  const [newUser, setNewUser] = useState();
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  console.log(url, "url");
  console.log(image, "dataaaa");

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "tutorial");
    data.append("cloud_name", "breellz");
    fetch("  https://api.cloudinary.com/v1_1/breellz/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  let addUser = () => {
    console.log({ name, email, photo, phone, role });
    axios
      .post("http://localhost:5000/new/user", {
        name,
        last,
        email,
        photo: "photo",
        phone,
        role,
        adress: "adress",
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <section>
      <div>
        <div>
          <div>
            <div>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            First Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            onChange={(e) => setLast(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Last Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            // type="text"
                            id="form3Example1c"
                            className="form-control"
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                            // onChange={(e) => setPhoto(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Photo
                          </label>
                        </div>
                      </div>
                      <button onClick={uploadImage}>upload image</button>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="number"
                            id="form3Example4c"
                            className="form-control"
                            onChange={(e) => setPone(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Phone number
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            selected
                            onChange={(e) => {
                              setRole(e.target.value);
                            }}
                          >
                            <option value>Open this select menu</option>
                            <option value="analyse">Agent Analyse</option>
                            <option value="facture">Agent Facture</option>
                            <option value="reception">Agent Reception</option>
                            <option value="fournisseur">Fournisseur</option>
                          </select>
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            Select Role
                          </label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I agree all statements in{" "}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary btn-lg"
                          onClick={() => addUser()}
                        >
                          Add User
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddUser;
