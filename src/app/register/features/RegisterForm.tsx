import React, { memo } from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { string as yupString, object as yupObject, ref as yupRef } from 'yup';

import { registerThunk } from '@entities/authentification/store/thunks/register.thunk';
import { Box, Button, styled, TextField, Typography } from '@ui-kit';

import { MainRoutesEnum } from '../../../RoutesEnum';
import { useAppDispatch } from '../../../store/useAppDispatch';

interface RegisterFormProps {
  email: string;
  token: string;
}

const StyledTextField = styled(TextField)`
  width: 70%;
`;

const StyledButton = styled(Button)`
  width: 70%;
`;

const validationSchema = yupObject({
  email: yupString().email('Enter a valid email').required('Email is required'),
  password: yupString()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be less than 20 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  passwordConfirmation: yupString().oneOf(
    [yupRef('password'), null],
    'Passwords must match'
  ),
});

export const RegisterForm = memo((props: RegisterFormProps) => {
  const { email, token } = props;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: {
      email,
      password: '',
      passwordConfirmation: '',
    },
    validationSchema,
    onSubmit: values => {
      const registerValues = {
        password: values.password,
        token,
      };
      dispatch(registerThunk(registerValues))
        .then(unwrapResult)
        .then(() => {
          enqueueSnackbar('Successfull registered and connected', {
            variant: 'success',
          });
          navigate(MainRoutesEnum.landingPage);
        })
        .catch(() => {
          enqueueSnackbar('Account already created', {
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
          Finaliser mon inscription
        </Typography>
        <StyledTextField
          disabled
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
          autoFocus
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
        <StyledTextField
          id="passwordConfirmation"
          name="passwordConfirmation"
          label="Confirmation Mot de passe"
          type="password"
          value={formik.values.passwordConfirmation}
          onChange={formik.handleChange}
          error={
            formik.touched.passwordConfirmation &&
            Boolean(formik.errors.passwordConfirmation)
          }
          helperText={
            formik.touched.passwordConfirmation && formik.errors.passwordConfirmation
          }
          InputLabelProps={{ style: { fontSize: 15 } }}
        />

        <StyledButton variant="contained" color="secondary" type="submit">
          <Typography>Inscription</Typography>
        </StyledButton>
      </Box>
    </form>
  );
});
