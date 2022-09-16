import React from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { string as yupString, object as yupObject } from 'yup';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { createTeamThunk } from '@entities/teams/store/thunks/createTeam.thunk';
import { Box, Button, Typography, TextField } from '@ui-kit';

import { useAppDispatch } from '../../../../store/useAppDispatch';

const validationSchema = yupObject({
  name: yupString().required('name is required'),
});

export const CreateTeamForm = () => {
  const { enqueueSnackbar } = useSnackbar();

  const token = useSelector(selectToken);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema,
    onSubmit: values => {
      dispatch(createTeamThunk({ name: values.name, token }))
        .then(unwrapResult)
        .then(() => {
          enqueueSnackbar('Team Crée avec succes', {
            variant: 'success',
          });
          formik.resetForm();
        })
        .catch(() => {
          enqueueSnackbar('Erreur en créant la team', {
            variant: 'error',
          });
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display="flex" flexDirection="column" maxWidth="50vh">
        <TextField
          variant="outlined"
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={
            formik.touched.name && formik.errors.name != null
              ? formik.errors.name
              : ' '
          }
          InputLabelProps={{ style: { fontSize: 15 } }}
        />

        <Box textAlign="center">
          <Button variant="contained" type="submit">
            <Typography>Create Team </Typography>
          </Button>
        </Box>
      </Box>
    </form>
  );
};
