import React from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { string as yupString, object as yupObject } from 'yup';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { createJobThunk } from '@entities/jobs/store/thunks/createJob.thunk';
import {
  Box,
  Button,
  Typography,
  TextField,
  Card,
  CardContent,
  Stack,
  WorkIcon,
} from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

const validationSchema = yupObject({
  name: yupString().required('Le nom de métier est obligatoire'),
});

export const CreateJobForm = () => {
  const { enqueueSnackbar } = useSnackbar();

  const token = useSelector(selectToken);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema,
    onSubmit: values => {
      dispatch(
        createJobThunk({
          name: values.name,
          description: values.description,
          token,
        })
      )
        .then(unwrapResult)
        .then(() => {
          enqueueSnackbar('Création de métier réussie', {
            variant: 'success',
          });
          formik.resetForm();
        })
        .catch(() => {
          enqueueSnackbar('Erreur en créant le métier', {
            variant: 'error',
          });
        });
    },
  });
  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <WorkIcon fontSize="large" />
            <Typography variant="h5">Inviter un utilisateur</Typography>
          </Stack>
          <Box
            display="flex"
            flexDirection="column"
            width={{ xs: '100%', md: '30vw' }}>
            <TextField
              variant="outlined"
              id="name"
              name="name"
              label="Nom de métier"
              color="secondary"
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

            <TextField
              variant="outlined"
              id="description"
              name="description"
              label="Description"
              color="secondary"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.description)}
              helperText={
                formik.touched.description && formik.errors.description != null
                  ? formik.errors.description
                  : ' '
              }
              InputLabelProps={{ style: { fontSize: 15 } }}
              multiline
              minRows={3}
            />

            <Box textAlign="center">
              <Button variant="contained" type="submit" color="secondary">
                <Typography>Création</Typography>
              </Button>
            </Box>
          </Box>
        </CardContent>
      </form>
    </Card>
  );
};
