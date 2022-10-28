import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { useAsync } from 'react-use';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { getDailyFeedbackThunk } from '@entities/dailyFeedback/store/thunks/getDailyFeedback.thunk';
import { Button, Box, Dialog, DialogContent, DialogTitle } from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

import { FeedbackForm } from './features/feedbackForm/FeedbackForm';

const FeedbackScreen = () => {
  const [openDialoFeedback, setOpenDialoFeedback] = useState(false);
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);

  const { loading, error, value } = useAsync(() =>
    dispatch(getDailyFeedbackThunk({ token }))
  );

  console.log(loading, error, value);
  return (
    <Box maxWidth="100%">
      <Dialog
        open={openDialoFeedback}
        onClose={() => {
          setOpenDialoFeedback(false);
        }}>
        <DialogTitle>Envoyer un feedback</DialogTitle>
        <DialogContent>
          <FeedbackForm onClose={setOpenDialoFeedback} />
        </DialogContent>
      </Dialog>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          setOpenDialoFeedback(true);
        }}>
        Envoyer un feedback
      </Button>
    </Box>
  );
};

export default FeedbackScreen;
