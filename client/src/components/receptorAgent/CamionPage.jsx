import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteModal from "./atoms/DeleteModal";
import CamionTable from "./CamionTable";
import CamionForm from "./form/CamionForm";
import SearchBar from "./atoms/SearchBare";
import IconButton from "@mui/material/IconButton";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import moment from "moment";
import Snackbar from "@mui/material/Snackbar";

export default function CamionPage() {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openFormModal, setOpenFormModal] = useState(false);
  const [camionId, setCamionId] = useState(null);
  const [formContext, setFormContext] = useState("");
  const [vendorSummary, setVendorSummary] = useState([]);
  const [camionList, setCamionList] = useState([]);
  const [camionById, setCamionById] = useState({});
  const [success, setSuccess] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [snackBarStatus, setSnackBarStatus] = useState({
    context: "",
    open: false,
  });
  

  const handleSnackBareClose = () => {
    setSnackBarStatus(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/fetch/VendorSummary")
      .then((response) => {
        setVendorSummary(response.data);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/fetch/CamionList")
      .then((response) => {
        setCamionList(
          response.data.map((camion) => {
            return {
              camionId: camion.camionId,
              client: camion.fullName,
              clientId: camion.vendorId,
              registration: camion.registration,
              warblerDate: camion.warblerDate,
              quantity: camion.quantity,
              clientPhotoUrl: camion.vendorPhotoUrl,
            };
          })
        );
      })
      .catch((err) => console.log(err));
  }, [success]);

  return (
    <div className="pt-8">
      <div
        className="flex  justify-between"
        style={{
          width: "82%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className=" pb-8">
          <SearchBar searchText={searchText} setSearchText={setSearchText} />
        </div>
        <div>
          <IconButton
            color="primary"
            onClick={() => {
              setOpenFormModal(true);
              setFormContext("add");
            }}
          >
            <AddBoxRoundedIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
      <CamionTable
        setOpenDeleteModal={setOpenDeleteModal}
        camionList={
          camionList && searchText
            ? camionList.filter(
                (camion) =>
                  camion.client
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  camion.registration.includes(searchText) ||
                  moment(camion.warblerDate)
                    .format("DD/MM/YYYY")
                    .includes(searchText)
              )
            : camionList
        }
        setCamionId={setCamionId}
        setOpenUpdateModal={setOpenFormModal}
        setFormContext={setFormContext}
        setCamionById={setCamionById}
        camionById={camionById}
      />
      <DeleteModal
        setOpenDeleteModal={setOpenDeleteModal}
        openDeleteModal={openDeleteModal}
        camionId={camionId}
        setSuccess={setSuccess}
        setSnackBarStatus={setSnackBarStatus}
        success={success}
      />
      <CamionForm
        setOpenUpdateModal={setOpenFormModal}
        vendorSummary={vendorSummary}
        camionId={camionId}
        setSuccess={setSuccess}
        formContext={formContext}
        success={success}
        setSnackBarStatus={setSnackBarStatus}
        camionById={camionById}
        openUpdateModal={openFormModal}
      />
      <Snackbar
        open={snackBarStatus.open}
        autoHideDuration={2000}
        onClose={handleSnackBareClose}
        message={snackBarStatus.context}
      />
    </div>
  );
}
