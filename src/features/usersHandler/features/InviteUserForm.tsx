import React from 'react';

// TODO: interdiction d'utiliser material-ui, on passe par l'ui-kit
import { MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import { string as yupString, object as yupObject } from 'yup';

import { Box, Button, Typography, TextField, Select } from '@ui-kit';

// TODO: à remplacer par l'appel de service pour avoir les teams
const teams = [
  'Compta',
  'Devs Frontend',
  'Devs Backend',
  'DevOps',
  'CoDir',
  'les boss',
  'les fétards',
  'les pedago epitech',
];

const validationSchema = yupObject({
  email: yupString().email('Enter a valid email').required('Email is required'),
  firstname: yupString().required('Firstname is required'),
  lastname: yupString().required('Lastname is required'),
  team: yupString().optional(),
});

export const InviteUserForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstname: '',
      lastname: '',
      team: [],
    },
    validationSchema,
    // TODO: le onsubmit est cassé
    onSubmit: values => {
      console.log('send an email to', values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box display="flex" flexDirection="column" maxWidth="50vh">
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
          label="Firstname"
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
          label="Lastname"
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

        {/* TODO: voir le bug etrange sur les labels */}
        {/* TODO: remplacer par des chips le rendu */}
        <Select
          multiple
          variant="outlined"
          id="team"
          name="team"
          label="Team"
          value={formik.values.team}
          onChange={formik.handleChange}>
          {teams.map(team => (
            <MenuItem key={team} value={team}>
              {team}
            </MenuItem>
          ))}
        </Select>

        <Box textAlign="center">
          <Button variant="contained" type="submit">
            <Typography>Invite</Typography>
          </Button>
        </Box>
      </Box>
    </form>
  );
};
