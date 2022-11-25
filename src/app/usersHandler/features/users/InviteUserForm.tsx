import React, { useCallback } from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import {
  string as yupString,
  object as yupObject,
  array as yupArray,
  number as yupNumber,
} from 'yup';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { selectJobs } from '@entities/jobs/store/selectors/getJobs.selector';
import { selectTeams } from '@entities/teams/store/selectors/getTeams.selector';
import { inviteThunk } from '@entities/users/store/thunks/invite.thunk';
import {
  Box,
  Button,
  Typography,
  Chip,
  TextField,
  SelectInput,
  SelectChangeEvent,
  MenuItem,
  Card,
  CardContent,
  CardActions,
  Stack,
  AddUserIcon,
} from '@ui-kit';

import { useAppDispatch } from '../../../../store/useAppDispatch';

const validationSchema = yupObject({
  email: yupString().email('Entrer un email valide').required('Email Obligatoire'),
  firstname: yupString().required('Prénom Obligatoire'),
  lastname: yupString().required('Nom Obligatoire'),
  job: yupNumber(),
  teams: yupArray(),
});

export const InviteUserForm = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);
  const jobsFromStore = useSelector(selectJobs);
  const teamsFromStore = useSelector(selectTeams);
  const { enqueueSnackbar } = useSnackbar();
  const formik = useFormik({
    initialValues: {
      email: '',
      firstname: '',
      lastname: '',
      job: '',
      teams: [],
    },
    validationSchema,
    onSubmit: values => {
      const InviteValues = {
        email: values.email,
        firstname: values.firstname,
        lastname: values.lastname,
        job: parseInt(values.job, 10),
        teams: values.teams,
        token,
      };
      dispatch(inviteThunk(InviteValues))
        .then(unwrapResult)
        .then(() => {
          enqueueSnackbar("L'utilisateur a bien été invité", {
            variant: 'success',
          });
          formik.resetForm();
        })
        .catch(() => {
          enqueueSnackbar("Une erreur est survenue lors de l'invitation", {
            variant: 'error',
          });
        });
    },
  });

  const handleChangeJob = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      formik.setFieldValue('job', event.target.value).catch(() => {});
    },
    [formik]
  );

  const handleChangeTeams = useCallback(
    (event: SelectChangeEvent<unknown>) => {
      formik.setFieldValue('teams', event.target.value).catch(() => {});
    },
    [formik]
  );

  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <AddUserIcon fontSize="large" />
            <Typography variant="h5">Inviter un utilisateur</Typography>
          </Stack>
          <Box display="flex" flexDirection="column" width="50vh">
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

            <SelectInput
              id="job"
              name="job"
              label="Job (Optionel)"
              value={formik.values.job}
              error={formik.touched.job && Boolean(formik.errors.job)}
              onChange={handleChangeJob}
              errorMessage={
                formik.touched.job && formik.errors.job != null
                  ? formik.errors.job
                  : ' '
              }>
              {jobsFromStore.map(jobFromStore => {
                const { id, name } = jobFromStore;
                return (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                );
              })}
            </SelectInput>

            <SelectInput
              id="teams"
              name="teams"
              label="Teams (Optionel)"
              multiple
              value={formik.values.teams}
              onChange={handleChangeTeams}
              error={formik.touched.teams && Boolean(formik.errors.teams)}
              renderValue={() => {
                const teamsNameSelected = formik.values.teams.map(teamId => {
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
                formik.touched.teams && formik.errors.teams != null
                  ? formik.errors.teams.toString()
                  : ' '
              }>
              {teamsFromStore.map(team => (
                <MenuItem key={team.id} value={team.id}>
                  {team.name}
                </MenuItem>
              ))}
            </SelectInput>
          </Box>
        </CardContent>
        <CardActions>
          <Box px={1} textAlign="center" width="100%">
            <Button variant="contained" type="submit">
              <Typography>Inviter</Typography>
            </Button>
          </Box>
        </CardActions>
      </form>
    </Card>
  );
};
