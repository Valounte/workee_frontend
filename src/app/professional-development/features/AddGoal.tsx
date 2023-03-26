import React, { useState } from "react";

import AddIcon from '@mui/icons-material/Add';
import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { addGoalService } from "@entities/professional-development/services/addGoal.service";
import { getGoalsThunk } from "@entities/professional-development/store/thunks/getGoals.thunk";
import { Button, DialogActions, Grid } from "@ui-kit";
import { useAppDispatch } from 'src/store/useAppDispatch';

interface NewGoalModalProps {
  open: boolean;
  handleClose: () => void;
}

const NewGoalModal = ({ open, handleClose }: NewGoalModalProps) => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const token = useSelector(selectToken);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const handleSave = () => {

        addGoalService({
          goal: name,
          startDate: new Date(startDate),
          endDate: new Date(endDate),
          token,
        })
        .then(() => {
          enqueueSnackbar('Objectif crée', {
            variant: 'success',
          });
          dispatch(getGoalsThunk({ token }))
          .then(() => unwrapResult)
          .catch(() => {
            console.error('error');
          });
        })
        .catch(() => {
          enqueueSnackbar('Erreur', {
            variant: 'error',
          });
        });
    setName("");
    setStartDate("");
    setEndDate("");
    handleClose();
  };

  const handleModalClose = () => {
    setName("");
    setStartDate("");
    setEndDate("");
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleModalClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Nouvel objectif</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nom du nouveau objectif"
          type="text"
          fullWidth
          value={name}
          onChange={handleNameChange}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              id="start-date"
              label="Date de début"
              type="date"
              fullWidth
              value={startDate}
              onChange={handleStartDateChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              margin="dense"
              id="end-date"
              label="Date de fin"
              type="date"
              fullWidth
              value={endDate}
              onChange={handleEndDateChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Annuler
        </Button>
        <Button onClick={handleSave} color="primary">
          Enregistrer
        </Button>
      </DialogActions>
    </Dialog>
  );
};


const AddGoal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AddIcon style={{ color: "#ff9800", fontSize: "5rem", cursor: "pointer" }} onClick={handleOpen} />
      <NewGoalModal open={open} handleClose={handleClose} />
    </>
  );
};

export default AddGoal;