import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import DialogContent from "@mui/material/DialogContent";
import Alert from "@mui/material/Alert";
import FormHelperText from "@mui/material/FormHelperText";
import { DialogActions } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import useCamionForm, { prepareCamionFormPayload } from "./useCamionForm";
import axios from "axios";

export default function CamionForm({
  setOpenUpdateModal,
  openUpdateModal,
  camionId,
  success,
  setSnackBarStatus,
  setSuccess,
  camionById,
  formContext,
  vendorSummary,
}) {
  const { initialValues, formIsReady, setFormIsReady } = useCamionForm({
    formContext,
    camionById,
  });
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

  const addCamion = (data) => {
    axios.post("http://localhost:5000/Add/Camion", data).then((result) => {
      if (result.data.length) {
        if (result.data.length) {
          setSnackBarStatus({
            context: "Enregistrement ajouté avec succès",
            open: true,
          });
          setSuccess(!success);
        }
      } else {
        setSnackBarStatus({
          context: "Une error s'est produite, veuillez reseuiller",
          open: true,
        });
      }
    });
  };
  let handleCamionUpdate = (camion) => {
    axios.put(`http://localhost:5000/update/Camion`, camion).then((result) => {
      if (result.data.length) {
        setSnackBarStatus({
          context: "Enregistrement modifié avec succès",
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
  useEffect(() => {
    reset(initialValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues]);

  const onSubmit = handleSubmit((data) => {
    console.log(data, "ad");
    const payload = prepareCamionFormPayload(data);
    formContext === "add" && addCamion(payload);
    formContext === "update" && handleCamionUpdate(data);
    handleClose(false);
  });

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
            ? "Ajouter un nouveau camion"
            : "Modifier les informations du camion"}
        </DialogTitle>
        <DialogContent>
          <form>
            <div>
              <div className=" pt-2 pb-5 ">
                <Controller
                  name="fournisseur"
                  control={control}
                  rules={{ required: "First name required" }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label="Selectionner un fournisseur"
                      select
                      value={value}
                      id="outlined-read-only-input"
                      type="text"
                      onChange={(e) => onChange(e)}
                      fullWidth
                    >
                      {vendorSummary.map((vendor) => (
                        <MenuItem key={vendor.id} value={vendor.id}>
                          {vendor.firstname + " " + vendor.lastname}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />

                <FormHelperText id="component-error-text" className="mr-5">
                  {errors.fournisseur && "Ce champ est requis"}
                </FormHelperText>
              </div>
              <div>
                <Controller
                  name="immatriculation"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      label="Immatriculation"
                      value={value}
                      type="text"
                      id="outlined-read-only-input"
                      onChange={(e) => onChange(e)}
                      fullWidth
                    />
                  )}
                />
                <FormHelperText id="component-error-text">
                  {errors.immatriculation && "Ce champ est requis"}
                </FormHelperText>
              </div>
              <div className=" pt-8 pb-8">
                <div className="space-x-4">
                  <Controller
                    name="date"
                    rules={{ required: true }}
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
                    rules={{
                      required: true,
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Seuls les numéros sont acceptés",
                      },
                    }}
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
                <FormHelperText>
                  {errors.quantity && errors.date
                    ? "Ces champs sont requis"
                    : errors.date
                    ? "Le champ date est requis" : errors.quantity?.message
                    ? errors.quantity?.message  : errors.quantity ? "Le champ quantité est requis"
                    : ""}
                </FormHelperText>
              </div>
            </div>
          </form> 
        </DialogContent>
        <DialogActions>
          <Button size="medium" variant="outlined" onClick={handleClose}>
            Annuler
          </Button>
          <Button
            size="medium"
            variant="contained"
            onClick={() => {
              onSubmit();
            }}
          >
            Confirmer
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
