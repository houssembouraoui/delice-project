import React, { useState } from "react";
import DeleteModal from "./atoms/DeleteModal";
import AnalyseTable from "./analyseTable";
import AnalyseForm from "./form/analyseForm";
import SearchBar from "./atoms/SearchBare";
import IconButton from "@mui/material/IconButton";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

export default function AnalysePage() {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openFormModal, setOpenFormModal] = useState(false);
  const [camionId, setCamionId] = useState(null);
  const [formContext, setFormContext] = useState("");

  return (
    <>
      <div
        className="flex  justify-between"
        style={{
          width: "82%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className=" pb-8">
          <SearchBar />
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
      <AnalyseTable
        setOpenDeleteModal={setOpenDeleteModal}
        setCamionId={setCamionId}
        setOpenUpdateModal={setOpenFormModal}
        setFormContext={setFormContext}
      />
      <DeleteModal
        setOpenDeleteModal={setOpenDeleteModal}
        openDeleteModal={openDeleteModal}
        camionId={camionId}
      />
      <AnalyseForm
        setOpenUpdateModal={setOpenFormModal}
        camionId={camionId}
        formContext={formContext}
        openUpdateModal={openFormModal}
      />
    </>
  );
}
