import React from 'react';

import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { string as yupString, object as yupObject } from 'yup';

import { Box, Button, Typography, TextField } from '@ui-kit';

const validationSchema = yupObject({
  name: yupString().required('name is required'),
});

export const CreateTeamForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema,
    onSubmit: values => {
      // TODO: brancher le service de création de team
      console.log('create this team', values);
      formik.resetForm();
      enqueueSnackbar('Team Crée avec succes', {
        variant: 'success',
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
