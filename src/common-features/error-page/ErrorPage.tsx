import React, { useCallback } from 'react';

import { DialogTitle } from '@mui/material';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { string as yupString, object as yupObject } from 'yup';

import {
  Typography,
  Grid,
  Box,
  Button,
  styled,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@ui-kit';
import { ReactComponent as ErrorImage } from '@ui-kit/images/erreur-illustration.svg';

const StyledButton = styled(Button)`
  max-width: 200px;
`;

const validationSchema = yupObject({
  description: yupString().required('Vous devez entrer une description du problème'),
});

export const ErrorPage = () => {
  const [openDialogContact, setOpenDialogContact] = React.useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleCloseDialogContact = useCallback(() => {
    setOpenDialogContact(false);
  }, [setOpenDialogContact]);

  const handleOpenDialogContact = useCallback(() => {
    setOpenDialogContact(true);
  }, [setOpenDialogContact]);

  const formik = useFormik({
    initialValues: {
      description: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log('message envoyé ', values);
      setOpenDialogContact(false);
      formik.resetForm();
      enqueueSnackbar('Message envoyé', {
        variant: 'success',
      });
    },
  });

  return (
    <>
      <Dialog open={openDialogContact} onClose={handleCloseDialogContact}>
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>Contacter le support</DialogTitle>
          <DialogContent>
            <DialogContentText paddingBottom={2}>
              Veuillez écrire votre message dans le champ ci-dessous.
            </DialogContentText>

            <TextField
              autoFocus
              id="description"
              label="Commentaire"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description != null
                  ? formik.errors.description
                  : ' '
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialogContact}>Annuler</Button>
            <Button type="submit">Envoyer</Button>
          </DialogActions>
        </form>
      </Dialog>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box
            minHeight="90vh"
            minWidth="50vw"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center">
            <ErrorImage width="80%" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box minHeight="90vh" minWidth="50vw">
            <Box
              display="flex"
              flexDirection="column"
              minHeight="90vh"
              justifyContent="center">
              <Typography variant="h2" fontWeight="500" paddingBottom={2}>
                Problème recontré
              </Typography>
              <Typography variant="subtitle1" fontSize="25px">
                Erreur, veuillez contacter le support.
              </Typography>
              <StyledButton
                variant="contained"
                color="secondary"
                onClick={handleOpenDialogContact}>
                <Typography>Contacter le support</Typography>
              </StyledButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
