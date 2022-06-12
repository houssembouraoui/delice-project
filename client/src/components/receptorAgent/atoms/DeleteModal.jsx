import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function DeleteModal({
  setOpenDeleteModal,
  openDeleteModal,
  camionId,
  setSuccess,
  setSnackBarStatus,
  success,
}) {
  const handleClose = () => {
    setOpenDeleteModal(false);
  };

  const handleDelete = () => {
    console.log(camionId, "deletemodal");

    axios
      .delete(`http://localhost:5000/delete/Camion/${camionId}`, {})
      .then((result) => {
        console.log(result);
        if (result.data.length) {
          setSnackBarStatus({
            context: "Enregistrement supprimé avec succès",
            open: true,
          });
          setSuccess(!success);
        } else {
          setSnackBarStatus({
            context: "Une error s'est produite, veuillez reseuiller",
            open: true,
          });
        }
      });
  };
  return (
    <React.Fragment>
      <Dialog
        open={openDeleteModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Voulez-vous supprimer ce camion ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error">
            Annuler
          </Button>
          <Button
            onClick={() => {
              handleDelete();
              handleClose();
            }}
            autoFocus
            color="error"
          >
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
