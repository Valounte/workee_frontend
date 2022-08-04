import React, { useCallback } from 'react';

import { DialogTitle } from '@mui/material';
import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { string as yupString, object as yupObject } from 'yup';

import {
  Typography,
  Container,
  Stack,
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
      <Container maxWidth="md">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          height={{ xs: '100vh' }}
          justifyContent={{ xs: 'center' }}>
          <Stack
            direction="column"
            alignItems="flex-start"
            width={{ xs: '100%', sm: '50%' }}
            display={{ xs: 'none', sm: 'flex' }}>
            <ErrorImage width="80%" />
          </Stack>
          <Stack
            direction="column"
            alignItems={{ xs: 'center', sm: 'flex-start' }}
            width={{ xs: '100%', sm: '50%' }}
            mt={{ xs: 3 }}>
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
          </Stack>
        </Stack>
      </Container>
    </>
  );
};
