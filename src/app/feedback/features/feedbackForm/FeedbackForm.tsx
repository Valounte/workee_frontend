import React, { memo } from 'react';

import { useFormik } from 'formik';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import {
  string as yupString,
  object as yupObject,
  number as yupNumber,
  boolean as yupBoolean,
} from 'yup';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { sendDailyFeedbackService } from '@entities/dailyFeedback/services/sendDailyFeedback.service';
import { Button, Checkbox, Stack, TextField, Typography } from '@ui-kit';

import { SatisfactionDegree } from './SatisfactionDegree';

const validationSchema = yupObject({
  message: yupString().optional(),
  satisfactionDegree: yupNumber().required('Niveau de satisfaction obligatoire'),
  isAnonymous: yupBoolean().required('Case obligatoire'),
});

interface FeedbackFormProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FeedbackForm = memo((props: FeedbackFormProps) => {
  const { onClose } = props;
  const token = useSelector(selectToken);
  const { enqueueSnackbar } = useSnackbar();

  if (!token) {
    throw Error('you have to be logged to acces here');
  }
  const formik = useFormik({
    initialValues: {
      message: '',
      satisfactionDegree: null,
      isAnonymous: true,
    },
    validationSchema,
    onSubmit: values => {
      const { isAnonymous, message, satisfactionDegree } = values;
      if (!satisfactionDegree) {
        return;
      }
      sendDailyFeedbackService({
        token,
        isAnonymous,
        message,
        satisfactionDegree,
      })
        .then(() => {
          onClose(false);
          enqueueSnackbar('Feedback envoyé avec succes', {
            variant: 'success',
          });
        })
        .catch(() => {
          enqueueSnackbar('Un problème est survenu, veuillez essayer plus tard', {
            variant: 'error',
          });
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack direction="column" spacing={2}>
        <Typography>Comment s&apos;est passé votre journée ?</Typography>
        <SatisfactionDegree
          id="satisfactionDegree"
          name="satisfactionDegree"
          value={formik.values.satisfactionDegree}
          onChange={formik.handleChange}
        />
        <TextField
          autoFocus
          variant="outlined"
          id="message"
          name="message"
          label="Message"
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={
            formik.touched.message && formik.errors.message != null
              ? formik.errors.message
              : ' '
          }
          InputLabelProps={{ style: { fontSize: 15 } }}
        />
        <Stack direction="row" alignItems="center">
          <Checkbox
            id="isAnonymous"
            name="isAnonymous"
            checked={formik.values.isAnonymous}
            onChange={formik.handleChange}
            color="secondary"
          />
          <Typography>Je souhaite rester anonyme</Typography>
        </Stack>
        <Button type="submit" color="secondary">
          Envoyer
        </Button>
      </Stack>
    </form>
  );
});
