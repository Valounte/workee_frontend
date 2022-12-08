import React from 'react';

import RateReviewIcon from '@mui/icons-material/RateReview';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useSelector } from 'react-redux';

import { selectIsDailyFeedbackSubmitted } from '@entities/dailyFeedback/store/selectors/isDailyFeedbackSubmitted.selector';
import {
  AppRouterLink,
  Card,
  CardContent,
  Typography,
  Button,
  SmileIcon,
  Box,
  Stack,
  CardHeader,
} from '@ui-kit';
import { MainAppRoutesEnum } from 'src/app/MainAppRoutesEnum';
import { MainRoutesEnum } from 'src/RoutesEnum';

export const Feedback = () => {
  const isDailyFeedbackSubmitted = useSelector(selectIsDailyFeedbackSubmitted);

  return (
    <Card>
      {isDailyFeedbackSubmitted !== undefined && (
        <>
          <CardHeader
            title={
              <Stack direction="row" alignItems="center" spacing={1}>
                <SmileIcon fontSize="large" />
                <Typography variant="h5">Rapport journalier</Typography>
              </Stack>
            }
          />

          <CardContent>
            <Box>
              {!isDailyFeedbackSubmitted ? (
                <Stack direction="row" spacing={1} alignItems="center">
                  <RateReviewIcon fontSize="large" />
                  <Typography>
                    Au moins une équipe a besoin de votre feedback journalier !
                  </Typography>
                </Stack>
              ) : (
                <Stack direction="row" spacing={1} alignItems="center">
                  <TaskAltIcon fontSize="large" />
                  <Typography>Merci pour votre feedback journalier !</Typography>
                </Stack>
              )}
              <AppRouterLink
                to={`${MainRoutesEnum.app}${MainAppRoutesEnum.feedback}`}>
                {!isDailyFeedbackSubmitted && (
                  <Button variant="contained" color="secondary">
                    Envoyer un feedback
                  </Button>
                )}
              </AppRouterLink>
            </Box>
          </CardContent>
        </>
      )}
    </Card>
  );
};
