/* eslint-disable no-unused-vars */
import React from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { string as yupString, object as yupObject } from 'yup';

import { selectMe } from '@entities/authentification/store/selectors/selectMe.selector';
import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { getMeThunk } from '@entities/authentification/store/thunks/getMe.thunk';
import {
  Avatar,
  Badge,
  Card,
  CardContent,
  Chip,
  Stack,
  TextField,
  Typography,
  styled,
  Button,
  IconButton,
  UploadPictureIcon,
} from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

const StyledButton = styled(Button)`
  align-self: center;
`;

const StyledIconButton = styled(IconButton)`
  border: 1px solid #ff7f27;
  background-color: white;
`;

const validationSchema = yupObject({
  firstname: yupString().required('Prénom Obligatoire'),
  lastname: yupString().required('Nom Obligatoire'),
  email: yupString().email('Entrer un email valide').required('Email Obligatoire'),
});

export const UserPersonnal = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectMe);

  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: {
      firstname: user?.firstname,
      lastname: user?.lastname,
      email: user?.email,
    },
    validationSchema,
    onSubmit: values => {
      const ProfileValues = {
        email: values.email,
        firstname: values.firstname,
        lastname: values.lastname,
        token,
      };
    },
  });

  return (
    <Card>
      <CardContent>
        <form
          onSubmit={formik.handleSubmit}
          // eslint-disable-next-line react/no-unknown-property
          onLoad={() => {
            formik.setFieldValue('firstname', user?.firstname).catch(() => {});
          }}>
          <Stack direction="row" alignItems="center">
            <Stack
              direction="column"
              spacing={1}
              width="30%"
              height="65vh"
              justifyContent="center"
              alignItems="center"
              borderRight="1px solid lightgrey"
              textAlign="center">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                  <StyledIconButton
                    color="secondary"
                    aria-label="upload picture"
                    size="small"
                    disableRipple
                    sx={{
                      '&:hover': {
                        backgroundColor: '#ff7f27',
                        color: 'white',
                      },
                    }}>
                    <input hidden accept="image/*" type="file" />
                    <UploadPictureIcon />
                  </StyledIconButton>
                }>
                <Avatar sx={{ width: 112, height: 112 }}>WB</Avatar>
              </Badge>
              <Stack direction="row" spacing={1} py={1}>
                <Typography variant="h5">{user?.firstname}</Typography>
                <Typography variant="h5">{user?.lastname}</Typography>
              </Stack>
              <Typography>
                {user?.job.name} chez {user?.company.name}{' '}
              </Typography>
              <Typography>dans les équipes</Typography>
              <Stack direction="row" spacing={1}>
                {user?.teams.map(team => (
                  <Chip label={team.name} />
                ))}
              </Stack>
            </Stack>

            <Stack direction="column" spacing={2} width="60%" marginLeft={4}>
              <Stack direction="column" spacing={1} maxWidth="60%">
                <Typography variant="h5">Informations personnelles</Typography>
                <TextField
                  variant="outlined"
                  id="firstname"
                  name="firstname"
                  label="Prénom"
                  color="secondary"
                  value={formik.values.firstname}
                  defaultValue={user?.firstname}
                  onClick={() => {
                    formik
                      .setFieldValue('firstname', user?.firstname)
                      .catch(() => {});
                  }}
                  error={
                    formik.touched.firstname && Boolean(formik.errors.firstname)
                  }
                  helperText={
                    formik.touched.firstname && formik.errors.firstname != null
                      ? formik.errors.firstname
                      : ' '
                  }
                />
                <TextField
                  variant="outlined"
                  id="lastname"
                  name="lastname"
                  label="Nom"
                  color="secondary"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  onClick={() => {
                    formik.setFieldValue('lastname', user?.lastname).catch(() => {});
                  }}
                  error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                  helperText={
                    formik.touched.lastname && formik.errors.lastname != null
                      ? formik.errors.lastname
                      : ' '
                  }
                />
                <TextField
                  autoFocus
                  variant="outlined"
                  id="email"
                  name="email"
                  label="Email"
                  color="secondary"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onClick={() => {
                    formik.setFieldValue('email', user?.email).catch(() => {});
                  }}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={
                    formik.touched.email && formik.errors.email != null
                      ? formik.errors.email
                      : ' '
                  }
                />
                <StyledButton variant="contained" color="secondary" type="submit">
                  <Typography>Enregistrer</Typography>
                </StyledButton>
              </Stack>
            </Stack>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
};
