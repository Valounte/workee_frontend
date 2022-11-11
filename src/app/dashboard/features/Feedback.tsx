import React from 'react';

import RateReviewIcon from '@mui/icons-material/RateReview';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Typography, Button } from '@mui/material';

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
  const isFeedbackNeeded = false;

  if (isFeedbackNeeded) {
    return (
      <>
        <StyledTitle variant="subtitle1" fontSize={24}>
          Au moins une équipe a besoin de votre feedback journalier !
        </StyledTitle>
        <StyledIcon />
        <AppRouterLink to={`${MainRoutesEnum.app}${MainAppRoutesEnum.feedback}`}>
          <StyledButton variant="contained" color="secondary">
            Envoyer un feedback
          </StyledButton>
        </AppRouterLink>
      </>
    );
  }

  return (
    <>
      <StyledTitle variant="subtitle1" fontSize={24}>
        Vous avez envoyé vos feedbacks pour aujourd&apos;hui !
      </StyledTitle>
      <StyledSuccessIcon />
    </>
  );
};
