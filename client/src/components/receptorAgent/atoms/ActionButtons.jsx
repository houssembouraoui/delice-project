import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

export default function ActionButtons({
  params,
  setOpenDeleteModal,
  setCamionId,
  setOpenUpdateModal,
  setFormContext,
  setCamionById
}) {


  let fetchCamionById = (camionId) => {
    console.log(camionId, "hhh");
    axios
      .get(`http://localhost:5000/fetch/CamionById/${camionId}`)
      .then((result) => setCamionById(result.data[0]));
  };

  const onDeleteClick = (e) => { 
    e.stopPropagation(); // don't select this row after clicking
    setCamionId(params.id);
  };



  const onUpdateClick = (e) => {
    e.stopPropagation(); // don't select this row after clicking
    fetchCamionById(params.row.camionId)
    // handleCamionUpdate(params.row, params.row.camionId)
  };
  return (
    <div className="space-x-4">

      <IconButton
        aria-label="update"
        color="info"
        size="small"
        onClick={(e) => {
          setOpenUpdateModal(true);
          setFormContext("update")
          onUpdateClick(e);
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
      <IconButton
        aria-label="delete"
        size="small"
        color="error"
        onClick={(e) => {
          setOpenDeleteModal(true);
          onDeleteClick(e);
        }}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
}
