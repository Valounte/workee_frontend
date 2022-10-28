import React, { useState } from 'react';

import { Button, Box, Dialog, DialogContent, DialogTitle } from '@ui-kit';

import { FeedbackForm } from './features/feedbackForm/FeedbackForm';

const FeedbackScreen = () => {
  const [openDialoFeedback, setOpenDialoFeedback] = useState(false);
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
