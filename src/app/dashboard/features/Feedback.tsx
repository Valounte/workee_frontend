import React from 'react';

import RateReviewIcon from '@mui/icons-material/RateReview';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectIsDailyFeedbackSubmitted } from '@entities/dailyFeedback/store/selectors/isDailyFeedbackSubmitted.selector';
import { AppRouterLink, styled } from '@ui-kit';
import { MainAppRoutesEnum } from 'src/app/MainAppRoutesEnum';
import { MainRoutesEnum } from 'src/RoutesEnum';

const StyledTitle = styled(Typography)`
  text-align: center;
  margin-top: 28px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  //center
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const StyledIcon = styled(RateReviewIcon)`
  font-size: 100px;
  color: #d9d9d9;
  //center icon
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
`;

const StyledSuccessIcon = styled(TaskAltIcon)`
  font-size: 150px;
  color: #d9d9d9;
  //center icon
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
`;

export const Feedback = () => {
  const feedback = useSelector(selectIsDailyFeedbackSubmitted);

  return (
    <div>
      {feedback && (
        <div>
          <StyledTitle variant="subtitle1" fontSize={24}>
            {feedback.isDailyFeedbackSubmitted === false
              ? 'Au moins une équipe a besoin de votre feedback journalier !'
              : 'Merci pour votre feedback journalier !'}
          </StyledTitle>
          {feedback.isDailyFeedbackSubmitted === false ? (
            <StyledIcon />
          ) : (
            <StyledSuccessIcon />
          )}
          <AppRouterLink to={`${MainRoutesEnum.app}${MainAppRoutesEnum.feedback}`}>
            {feedback.isDailyFeedbackSubmitted === false && (
              <StyledButton variant="contained" color="secondary">
                Envoyer un feedback
              </StyledButton>
            )}
          </AppRouterLink>
        </div>
      )}
    </div>
  );
};
