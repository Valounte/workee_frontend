import React, { useCallback } from 'react';

import { MenuItem } from '@mui/material';
import { unwrapResult } from '@reduxjs/toolkit';
import { isEmptyArray, useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { useAsync } from 'react-use';
import { array as yupArray, object as yupObject, string as yupString } from 'yup';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { sendNotificationThunk } from '@entities/notifications/store/thunks/sendNotification.thunk';
import { selectTeams } from '@entities/teams/store/selectors/getTeams.selector';
import { getTeamsThunk } from '@entities/teams/store/thunks/getTeams.thunk';
import { selectUsers } from '@entities/users/store/selectors/getUsers.selector';
import { getUsersThunk } from '@entities/users/store/thunks/getUsers.thunk';
import {
  Box,
  Button,
  SelectChangeEvent,
  SelectInput,
  TextField,
  Typography,
  Chip,
  CardContent,
  Card,
} from '@ui-kit';

import { useAppDispatch } from '../../../store/useAppDispatch';

const validationSchema = yupObject({
  teamsId: yupArray(),
  usersId: yupArray(),
  alertLevel: yupString().required('Status Obligatoire'),
  message: yupString().required('Message Obligatoire'),
});

const statusLevel = ['normal', 'important', 'urgent'];

export const NotificationManagerForm = () => {
  const token = useSelector(selectToken);
  let usersFromStore = useSelector(selectUsers);
  let teamsFromStore = useSelector(selectTeams);
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      teamsId: [],
      usersId: [],
      alertLevel: '',
      message: '',
    },
    validationSchema,
    onSubmit: values => {
      const sendNotifValues = {
        teamsId: values.teamsId,
        usersId: values.usersId,
        alertLevel: values.alertLevel,
        message: values.message,
        token,
      };
      if (isEmptyArray(values.teamsId) && isEmptyArray(values.usersId)) {
        enqueueSnackbar('Vous devez ajouter au moins une personne à notifier !', {
          variant: 'error',
        });
        return;
      }

      dispatch(sendNotificationThunk(sendNotifValues))
        .then(unwrapResult)
        .then(() => {
          enqueueSnackbar('La notification à bien été envoyé !', {
            variant: 'success',
          });
        })
        .catch(() => {
          enqueueSnackbar(
            "Une erreur est survenue lors de l'envoie de la notificaion !",
            {
              variant: 'error',
            }
          );
        });
    },
  });

  const { error: errorUsers } = useAsync(() => dispatch(getUsersThunk({ token })));
  if (errorUsers) {
    usersFromStore = [];
  }
  const { error: errorTeams } = useAsync(() => dispatch(getTeamsThunk({ token })));
  if (errorTeams) {
    teamsFromStore = [];
  }
  const handleLevelChange = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      formik.setFieldValue('alertLevel', event.target.value).catch(() => {});
    },
    [formik]
  );

  const handleChangeTeams = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      formik.setFieldValue('teamsId', event.target.value).catch(() => {});
    },
    [formik]
  );

  const handleChangeUsers = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      formik.setFieldValue('usersId', event.target.value).catch(() => {});
    },
    [formik]
  );

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card sx={{maxWidth:"50%" }}>
        <CardContent>
        <Box display="flex" flexDirection="column" margin="0 auto">
          <SelectInput
            id="teams"
            name="teams"
            label="Equipe(s) à notifier"
            multiple
            value={formik.values.teamsId}
            onChange={handleChangeTeams}
            error={formik.touched.teamsId && Boolean(formik.errors.teamsId)}
            renderValue={() => {
              const teamsNameSelected = formik.values.teamsId.map(teamId => {
                const team = teamsFromStore.find(team => team.id === teamId);
                return team ? team.name : teamId;
              });
              return (
                <Box display="flex" flexWrap="wrap" gap={0.5}>
                  {teamsNameSelected.map(teamSelectedRender => (
                    <Chip key={teamSelectedRender} label={teamSelectedRender} />
                  ))}
                </Box>
              );
            }}
            errorMessage={
              formik.touched.teamsId && formik.errors.teamsId != null
                ? formik.errors.teamsId.toString()
                : ' '
            }>
            {teamsFromStore.map(team => (
              <MenuItem key={team.id} value={team.id}>
                {team.name}
              </MenuItem>
            ))}
          </SelectInput>
          <SelectInput
            id="users"
            name="users"
            label="Personne(s) à notifier"
            multiple
            value={formik.values.usersId}
            onChange={handleChangeUsers}
            error={formik.touched.usersId && Boolean(formik.errors.usersId)}
            renderValue={() => {
              const usersNameSelected = formik.values.usersId.map(userId => {
                const user = usersFromStore.find(user => user.id === userId);
                return user ? user.firstname : userId;
              });
              return (
                <Box display="flex" flexWrap="wrap" gap={0.5}>
                  {usersNameSelected.map(userSelectedRender => (
                    <Chip key={userSelectedRender} label={userSelectedRender} />
                  ))}
                </Box>
              );
            }}
            errorMessage={
              formik.touched.usersId && formik.errors.usersId != null
                ? formik.errors.usersId.toString()
                : ' '
            }>
            {usersFromStore.map(user => (
              <MenuItem key={user.id} value={user.id}>
                {user.firstname}
              </MenuItem>
            ))}
          </SelectInput>
          <SelectInput
            key="status"
            id="status"
            name="status"
            label="Niveau d'importance"
            value={formik.values.alertLevel}
            error={formik.touched.alertLevel && Boolean(formik.errors.alertLevel)}
            onChange={handleLevelChange}
            errorMessage={
              formik.touched.alertLevel && formik.errors.alertLevel != null
                ? formik.errors.alertLevel
                : ' '
            }>
            {statusLevel.map(level => (
              <MenuItem key={`item${level}`} value={level}>
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </MenuItem>
            ))}
          </SelectInput>
          <TextField
            variant="outlined"
            key="message"
            id="message"
            name="message"
            label="Message"
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={
              formik.touched.message && formik.errors.message != null
                ? formik.errors.message
                : ' '
            }
            InputLabelProps={{ style: { fontSize: 15 } }}
          />

          <Button key="submit" variant="contained" type="submit">
            <Typography textAlign="center">Envoyer la notification</Typography>
          </Button>
        </Box>
        </CardContent>
      </Card>
    </form>
  );
};
