import React, { useState, useContext, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import ActionButtons from "./atoms/ActionButtons";
import { Context } from "../contextBidou";
import axios from "axios";

const rows = [
  {
    id: 1,
    fournisseur_id: "Snow",
    humidité: "humid",
    ph: 3,
    densité: "dense",
    acidité: "acide",
    aspeect_couleur: "gris",
    matiere_grasse: 2,
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
  const [data, setData] = useState(rows);
  const table = useContext(Context);

  useEffect(() => {
    axios
      .get("http://localhost:5000/lesanalyses")
      .then((response) => {
        setData(response.data);
        table.setTableData(response.data);
        console.log(table.tableData, "testing the context");
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(data, "el data");

  const columns = [
    { field: "id", headerName: "ID", width: 50, hide: true },
    { field: "Date", headerName: "Date de parution", width: 300 },
    { field: "fournisseur_id", headerName: "fournisseur", width: 300 },
    { field: "humidite", headerName: "humidité", width: 300 },
    { field: "Ph", headerName: "PH", width: 300 },
    { field: "densite", headerName: "densité", width: 300 },
    { field: "acidite", headerName: "acidité", width: 300 },
    { field: "aspeect_couleur", headerName: "aspect", width: 300 },
    { field: "matiere_grasse", headerName: "matiere", width: 300 },
    { field: "etat", headerName: "etat", width: 300 },

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
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
