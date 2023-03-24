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
  Stack,
  CardHeader,
  styled,
} from '@ui-kit';
import { MainAppRoutesEnum } from 'src/app/MainAppRoutesEnum';
import { MainRoutesEnum } from 'src/RoutesEnum';

const StyledLink = styled(AppRouterLink)`
  align-self: center;
`;

export const Feedback = () => {
  const isDailyFeedbackSubmitted = useSelector(selectIsDailyFeedbackSubmitted);

  return (
    <Card>
      {isDailyFeedbackSubmitted !== undefined && (
        <>
          <CardHeader
            title={
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="h5">Rapport journalier</Typography>
              </Stack>
            }
          />

          <CardContent>
            <Stack>
              {!isDailyFeedbackSubmitted ? (
                <Stack direction="row" spacing={2} alignItems="center">
                  <RateReviewIcon fontSize="large" color="secondary" />
                  <Typography>
                    Au moins une équipe a besoin de votre feedback journalier !
                  </Typography>
                </Stack>
              ) : (
                <Stack direction="row" spacing={2} alignItems="center">
                  <TaskAltIcon fontSize="large" color="success" />
                  <Typography>Merci pour votre feedback journalier !</Typography>
                </Stack>
              )}
              <StyledLink to={`${MainRoutesEnum.app}${MainAppRoutesEnum.feedback}`}>
                {!isDailyFeedbackSubmitted && (
                  <Button variant="contained" color="secondary">
                    Envoyer un feedback
                  </Button>
                )}
              </StyledLink>
            </Stack>
          </CardContent>
        </>
      )}
    </Card>
  );
};
