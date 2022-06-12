import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function DeleteModal({setOpenDeleteModal, openDeleteModal, camionId}) {
console.log(camionId, "camion");

  const handleClose = () => {
    setOpenDeleteModal(false);
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
          <Button onClick={handleClose} variant="contained" color='error'>Annuler</Button>
          <Button onClick={handleClose} autoFocus color='error'>
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}