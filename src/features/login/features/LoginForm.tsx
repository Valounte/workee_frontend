import React from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { string as yupString, object as yupObject } from 'yup';

import { RoutesEnum } from '@entities/RoutesEnum';
import { loginThunk } from '@entities/user/store/thunks/login.thunk';
import {
  Box,
  Button,
  styled,
  Typography,
  TextField,
  Grid,
  Stack,
  Checkbox,
} from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

const StyledTextField = styled(TextField)`
  width: 70%;
`;

const StyledButton = styled(Button)`
  width: 70%;
`;

const StyledCheckBox = styled(Checkbox)`
  padding: 0px;
  padding-right: 3px;
`;

const validationSchema = yupObject({
  email: yupString().email('Enter a valid email').required('Email is required'),
  password: yupString().required('Password is required'),
});

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      dispatch(loginThunk(values))
        .then(unwrapResult)
        .then(() => {
          enqueueSnackbar('Successfull connected', {
            variant: 'success',
          });
          navigate(RoutesEnum.home);
        })
        .catch(() => {
          enqueueSnackbar('Password or email incorrect', {
            variant: 'error',
          });
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="90vh"
        justifyContent="center"
        alignItems="center">
        <Typography variant="h3" paddingBottom={6}>
          Content de vous revoir !
        </Typography>
        <StyledTextField
          autoFocus
          variant="outlined"
          id="email"
          name="email"
          label="Mail"
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
        <StyledTextField
          id="password"
          name="password"
          label="Mot de passe"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={
            formik.touched.password && formik.errors.password != null
              ? formik.errors.password
              : ' '
          }
          InputLabelProps={{ style: { fontSize: 15 } }}
        />
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="70%">
          <Grid item>
            <Stack direction="row" alignItems="center">
              <StyledCheckBox disableRipple size="small" />
              <Typography>Rester connecté</Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Typography>Mot de passe oublié ?</Typography>
          </Grid>
        </Grid>
        <StyledButton variant="contained" color="secondary" type="submit">
          <Typography>Connexion</Typography>
        </StyledButton>
      </Box>
    </form>
  );
};
