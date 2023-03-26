import React, { useState, useEffect } from 'react';

import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Modal, TextField, MenuItem, Button } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { editSubGoalThunk } from '@entities/professional-development/store/thunks/editSubGoal.thunk';
import { getGoalsThunk } from '@entities/professional-development/store/thunks/getGoals.thunk';
import { Typography } from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

interface EditSubGoalProps {
  subGoalName: string;
  status: string;
  subGoalId: number;
}

const EditSubGoal: React.FC<EditSubGoalProps> = ({
  subGoalId,
  subGoalName,
  status,
}) => {
  const token = useSelector(selectToken);
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [newSubGoalName, setNewSubGoalName] = useState(subGoalName);
  const [newStatus, setNewStatus] = useState(status);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setNewSubGoalName(subGoalName);
    setNewStatus(status);
  }, [subGoalName, status]);

  const handleOpen = () => {
    console.log(status);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    dispatch(
      editSubGoalThunk({
        subGoalId,
        status: reverseNameChange(newStatus),
        subGoal: newSubGoalName,
        token,
      })
    )
      .then(unwrapResult)
      .then(() => {
        enqueueSnackbar('Sous-objectif modifié', {
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

    handleClose();
  };

  const handleNameChange = (status: string): string => {
    switch (status) {
      case 'TO_DO':
        return 'A faire';
      case 'IN_PROGRESS':
        return 'En cours';
      case 'DONE':
        return 'Terminé';
      default:
        return 'incorrect';
    }
  };

  const reverseNameChange = (status: string): string => {
    switch (status) {
      case 'A faire':
        return 'TO_DO';
      case 'En cours':
        return 'IN_PROGRESS';
      case 'Terminé':
        return 'DONE';
      default:
        return 'incorrect';
    }
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description">
        <div
          className="modal"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            borderRadius: '8px',
            width: '400px',
            height: '280px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '20px',
          }}>
          <Typography variant="h6" id="modal-title">
            Modifier le sous-objectif
          </Typography>
          <TextField
            label="Nom du sous-objectif"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newSubGoalName}
            onChange={e => setNewSubGoalName(e.target.value)}
          />
          <TextField
            select
            label="Statut"
            variant="outlined"
            fullWidth
            margin="normal"
            defaultValue={handleNameChange(newStatus)}
            onChange={e => setNewStatus(e.target.value)}>
            <MenuItem value="A faire">A faire</MenuItem>
            <MenuItem value="En cours">En cours</MenuItem>
            <MenuItem value="Terminé">Terminé</MenuItem>
          </TextField>
          <div>
            <Button
              variant="contained"
              onClick={handleSave}
              style={{
                backgroundColor: '#FEBD69',
                color: '#fff',
                marginRight: '10px',
              }}>
              Enregistrer
            </Button>
            <Button
              variant="contained"
              onClick={handleClose}
              style={{ backgroundColor: '#FF5A5F', color: '#fff' }}>
              Annuler
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditSubGoal;
