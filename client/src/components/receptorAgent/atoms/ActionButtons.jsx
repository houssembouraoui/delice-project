import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ActionButtons({
  params,
  setOpenDeleteModal,
  setCamionId,
  setOpenUpdateModal,
  setFormContext,
}) {
  const onDeleteClick = (e) => {
    e.stopPropagation(); // don't select this row after clicking
    const api = params.api;
    const thisRow = {};
    api
      .getAllColumns()
      .filter((c) => c.field !== "__check__" && !!c)
      .forEach((c) => {
        setCamionId(params.id);
        return (thisRow[c.field] = params.getValue(params.id, c.field));
      });
  };

  const onUpdateClick = (e) => {
    e.stopPropagation(); // don't select this row after clicking
    const api = params.api;
    const thisRow = {};
    api
      .getAllColumns()
      .filter((c) => c.field !== "__check__" && !!c)
      .forEach((c) => {
        setCamionId(params.id);
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
