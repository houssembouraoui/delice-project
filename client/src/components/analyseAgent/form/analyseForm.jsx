import React, { useEffect, useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import OutlinedInput from "@mui/material/OutlinedInput";
import DialogContent from "@mui/material/DialogContent";
import { DialogActions } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import useAnalyseForm, { prepareCamionFormPayload } from "./useAnalyseForm";
import { Context } from "../../contextBidou";

export default function AnalyseForm({
  setOpenUpdateModal,
  openUpdateModal,
  camionId,
  formContext,
}) {
  const { initialValues, formIsReady, setFormIsReady } = useAnalyseForm({
    formContext,
  });
  const data = useContext(Context);
  console.log(data, "data from the context in the form");

  // useEffect(() => {
  // });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    reValidateMode: "onChange",
    criteriaMode: "all",
  });

  useEffect(() => {
    reset(initialValues);
  }, [initialValues]);

  const onSubmit = (data) => {
    // console.log(initialValues);
    const payload = prepareCamionFormPayload(data);
  };

  const handleClose = () => {
    setOpenUpdateModal(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={openUpdateModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>
          {formContext === "add"
            ? "Ajouter un nouveau analyse"
            : "Modifier les informations d'analyse"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className=" pt-2 pb-8 space-x-4">
                <Controller
                  name="fournisseur"
                  control={control}
                  rules={{ required: "First name required" }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label="Fournisseur"
                      value={value}
                      id="outlined-read-only-input"
                      type="text"
                      onChange={(e) => onChange(e)}
                      fullWidth
                    />
                  )}
                />
              </div>
              <div>
                <Controller
                  name="immatriculation"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label="Immatriculation"
                      value={value}
                      type="text"
                      id="outlined-read-only-input"
                      onChange={(e) => {
                        console.log(onChange);
                        onChange(e);
                      }}
                      fullWidth
                    />
                  )}
                />
              </div>

              <div className=" pt-8 pb-8 space-x-4">
                <Controller
                  name="date"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      id="date"
                      label="Date de parution"
                      type="date"
                      onChange={(e) => onChange(e)}
                      value={value}
                      sx={{ width: 220 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  )}
                />
                <Controller
                  name="quantity"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label="Quantité en littre"
                      onChange={(e) => onChange(e)}
                      value={value}
                      endAdornment={
                        <InputAdornment position="end">L</InputAdornment>
                      }
                      type="text"
                    />
                  )}
                />
              </div>

              <div className=" pt-8 pb-8 space-x-4">
                <Controller
                  name="quantity"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label="Quantité en littre"
                      onChange={(e) => onChange(e)}
                      value={value}
                      endAdornment={
                        <InputAdornment position="end">L</InputAdornment>
                      }
                      type="text"
                    />
                  )}
                />
                <Controller
                  name="quantity"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label="Quantité en littre"
                      onChange={(e) => onChange(e)}
                      value={value}
                      endAdornment={
                        <InputAdornment position="end">L</InputAdornment>
                      }
                      type="text"
                    />
                  )}
                />
              </div>
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button size="medium" variant="outlined" onClick={handleClose}>
            Annuler
          </Button>
          <Button size="medium" variant="contained">
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
