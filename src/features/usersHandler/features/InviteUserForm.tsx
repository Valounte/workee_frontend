import React from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { string as yupString, object as yupObject } from 'yup';

import { RoutesEnum } from '@entities/RoutesEnum';
import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { inviteThunk } from '@entities/users/store/thunks/invite.thunk';
import { Box, Button, Typography, TextField } from '@ui-kit';

import { useAppDispatch } from '../../../store/useAppDispatch';

const validationSchema = yupObject({
  email: yupString().email('Entrer un email valide').required('Email Obligatoire'),
  firstname: yupString().required('Prénom Obligatoire'),
  lastname: yupString().required('Nom Obligatoire'),
});

export const InviteUserForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken) as string;
  const { enqueueSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      email: '',
      firstname: '',
      lastname: '',
      job: '',
      teams: '',
    },
    validationSchema,
    onSubmit: values => {
      const InviteValues = {
        email: values.email,
        firstname: values.firstname,
        lastname: values.lastname,
        job: 1,
        teams: [1],
        // envoyer les team
        // envoyer les jobs
        token,
      };
      dispatch(inviteThunk(InviteValues))
        .then(unwrapResult)
        .then(() => {
          enqueueSnackbar('User successfully invited !', {
            variant: 'success',
          });
          navigate(RoutesEnum.home);
        })
        .catch(() => {
          enqueueSnackbar('Error invitation', {
            variant: 'error',
          });
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box  width="50%" margin="0 auto" padding="30px">
        <Box display="flex" flexDirection="column" maxWidth="70%" margin="0 auto">
          <TextField
              autoFocus
              variant="outlined"
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={
                formik.touched.email && formik.errors.email != null
                    ? formik.errors.email
                    : ' '
              }
              InputLabelProps={{ style: { fontSize: 15 } }}
          />
          <TextField
              variant="outlined"
              id="firstname"
              name="firstname"
              label="Prénom"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              error={formik.touched.firstname && Boolean(formik.errors.firstname)}
              helperText={
                formik.touched.firstname && formik.errors.firstname != null
                    ? formik.errors.firstname
                    : ' '
              }
              InputLabelProps={{ style: { fontSize: 15 } }}
          />
          <TextField
              variant="outlined"
              id="lastname"
              name="lastname"
              label="Nom"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={
                formik.touched.lastname && formik.errors.lastname != null
                    ? formik.errors.lastname
                    : ' '
              }
              InputLabelProps={{ style: { fontSize: 15 } }}
          />
          <Button variant="contained" type="submit">
            <Typography textAlign="center">Inviter un nouvel utilisateur</Typography>
          </Button>
        </Box>
      </Box>
    </form>
  );
};
