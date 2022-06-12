import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import ActionButtons from "./atoms/ActionButtons";
import ClientCell from "./atoms/ClientCell";
import TimeCell from "./atoms/TimeCell";

export default function CamionTable({
  setOpenDeleteModal,
  setCamionId,
  setOpenUpdateModal,
  setFormContext,
  camionList,
  handleCamionUpdate,
  setCamionById,
  camionById
}) {
  const columns = [
    { field: "camionId", headerName: "ID", width: 50, hide: true },
    {
      field: "client",
      headerName: "Fournisseur",
      width: 300,
      renderCell: (params) => {
        return <ClientCell params={params.row} />;
      },
    },
    { field: "registration", headerName: "Immatriculation", width: 300 },
    {
      field: "warblerDate",
      headerName: "Date de parution",
      width: 300,
      renderCell: (params) => {
        return <TimeCell params={params.row} />;
      },
    },
    {
      field: "quantity",
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
            handleCamionUpdate={handleCamionUpdate}
            setOpenDeleteModal={setOpenDeleteModal}
            setCamionId={setCamionId}
            setOpenUpdateModal={setOpenUpdateModal}
            setFormContext={setFormContext}
            setCamionById={setCamionById}
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
        rows={camionList && camionList?.length ? camionList : []}
        columns={columns}
        getRowId={(row) => row.camionId}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
