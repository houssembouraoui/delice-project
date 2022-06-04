import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ActionButtons from "./atoms/ActionButtons";

const rows = [
  { id: 1, Fournisseur: "Snow", Immatriculation: "Jon", Date: 35 },
  { id: 2, Fournisseur: "Lannister", Immatriculation: "Cersei", Date: 42 },
  { id: 3, Fournisseur: "Lannister", Immatriculation: "Jaime", Date: 45 },
  { id: 4, Fournisseur: "Stark", Immatriculation: "Arya", Date: 16 },
  { id: 5, Fournisseur: "Targaryen", Immatriculation: "Daenerys", Date: null },
  { id: 6, Fournisseur: "Melisandre", Immatriculation: null, Date: 150 },
  { id: 7, Fournisseur: "Clifford", Immatriculation: "Ferrara", Date: 44 },
  { id: 8, Fournisseur: "Frances", Immatriculation: "Rossini", Date: 36 },
  { id: 9, Fournisseur: "Roxie", Immatriculation: "Harvey", Date: 65 },
];

export default function CamionTable({
  setOpenDeleteModal,
  setCamionId,
  setOpenUpdateModal,
  setFormContext
}) {
  const columns = [
    { field: "id", headerName: "ID", width: 50, hide: true },
    { field: "Fournisseur", headerName: "Fournisseur", width: 300 },
    { field: "Immatriculation", headerName: "Immatriculation", width: 300 },
    { field: "Date", headerName: "Date de parution", width: 300 },
    {
      field: "MilkQuantity",
      headerName: "Quantité lait (L)",
      width: 210,
    },
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
