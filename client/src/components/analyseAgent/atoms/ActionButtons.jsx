import React, { useState, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Context } from "../../contextBidou";
import axios from "axios";

export default function ActionButtons({
  params,
  setOpenDeleteModal,
  setCamionId,
  setOpenUpdateModal,
  setFormContext,
}) {
  // console.log(params.id, "the id sent as params");
  // console.log(user, "the context");
  const user = useContext(Context);
  const [userId, setUserId] = useState(null);
  const onDeleteClick = (e) => {
    console.log(params.id, "the id sent as params");

    e.stopPropagation(); // don't select this row after clicking
    const api = params.api;
    const thisRow = {};
    axios
      .delete(`http://localhost:5000/delete/analyse/${params.id}`)
      .then((response) => {
        console.log("deleted successfully");
        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach((c) => {
            setCamionId(params.id);
            return (thisRow[c.field] = params.getValue(params.id, c.field));
          });
      })
      .catch((err) => console.log(err));
  };
  // console.log(user, "onclick event handling");

  const onUpdateClick = (e) => {
    e.stopPropagation(); // don't select this row after clicking
    const api = params.api;
    const thisRow = {};
    api
      .getAllColumns()
      .filter((c) => c.field !== "__check__" && !!c)
      .forEach((c) => {
        setCamionId(params.id);
        // console.log(user);
        user.setRow(params.id);
        return (thisRow[c.field] = params.getValue(params.id, c.field));
      });
  };
  return (
    <div className="space-x-4">
      <IconButton
        aria-label="update"
        color="info"
        size="small"
        onClick={(e) => {
          setOpenUpdateModal(true);
          setFormContext("update");
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
