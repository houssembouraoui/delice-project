import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ActionButtons from "./atoms/ActionButtons";

const rows = [
  {
    id: 1,
    Fournisseur: "Snow",
    humidité: "humid",
    ph: 3,
    densité: "dense",
    acidité: "acide",
    aspect: "gris",
    matiere: 2,
    etat: "state",
    Date: 35,
  },
  {
    id: 1,
    Fournisseur: "Snow",
    humidité: "humid",
    ph: 3,
    densité: "dense",
    acidité: "acide",
    aspect: "gris",
    matiere: 2,
    etat: "state",
    Date: 35,
  },
  {
    id: 1,
    Fournisseur: "Snow",
    humidité: "humid",
    ph: 3,
    densité: "dense",
    acidité: "acide",
    aspect: "gris",
    matiere: 2,
    etat: "state",
    Date: 35,
  },
  {
    id: 1,
    Fournisseur: "Snow",
    humidité: "humid",
    ph: 3,
    densité: "dense",
    acidité: "acide",
    aspect: "gris",
    matiere: 2,
    etat: "state",
    Date: 35,
  },
  {
    id: 1,
    Fournisseur: "Snow",
    humidité: "humid",
    ph: 3,
    densité: "dense",
    acidité: "acide",
    aspect: "gris",
    matiere: 2,
    etat: "state",
    Date: 35,
  },
  {
    id: 1,
    Fournisseur: "Snow",
    humidité: "humid",
    ph: 3,
    densité: "dense",
    acidité: "acide",
    aspect: "gris",
    matiere: 2,
    etat: "state",
    Date: 35,
  },
];

export default function AnalyseTable({
  setOpenDeleteModal,
  setCamionId,
  setOpenUpdateModal,
  setFormContext,
}) {
  const columns = [
    { field: "id", headerName: "ID", width: 50, hide: true },
    { field: "Date", headerName: "Date de parution", width: 300 },
    { field: "Fournisseur", headerName: "Fournisseur", width: 300 },
    { field: "humidité", headerName: "humidité", width: 300 },
    { field: "ph", headerName: "PH", width: 300 },
    { field: "densité", headerName: "densité", width: 300 },
    { field: "acidité", headerName: "acidité", width: 300 },
    { field: "aspect", headerName: "aspect", width: 300 },
    { field: "matiere", headerName: "matiere", width: 300 },
    { field: "etat", headerName: "densité", width: 300 },

    {
      field: "Action",
      headerName: "Action",
      sortable: false,
      width: 146,
      renderCell: (params) => {
        return (
          <ActionButtons
            params={params}
            setOpenDeleteModal={setOpenDeleteModal}
            setCamionId={setCamionId}
            setOpenUpdateModal={setOpenUpdateModal}
            setFormContext={setFormContext}
          />
        );
      },
    },
  ];
  return (
    <div
      style={{
        height: 371,
        width: "82%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
