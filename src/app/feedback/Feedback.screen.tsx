import React from 'react';

import { useSelector } from 'react-redux';
import { useAsync } from 'react-use';

import { MainNavigation } from '@common-features/main-navigation/MainNavigation';
import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { getDailyFeedbackThunk } from '@entities/dailyFeedback/store/thunks/getDailyFeedback.thunk';
import { styled, Container, Stack } from '@ui-kit';

import { useAppDispatch } from '../../store/useAppDispatch';
import { DailyFeedbackDataGrid } from './features/DailyFeedbackDataGrid';

const StyledContainer = styled(Container)`
  max-width: 100%;
  padding: 0;
`;

const FeedbackScreen = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);

  // TODO : use loading and errors
  useAsync(() => dispatch(getDailyFeedbackThunk({ teamId: 1, token })));

  // const lastWeekDailyFeedback = useSelector(selectDailyFeedback);

  // console.log(lastWeekDailyFeedback);

  return (
    <StyledContainer>
      <DailyFeedbackDataGrid />
      <Stack direction="row" height="100vh" spacing={0}>
        <MainNavigation />
      </Stack>
    </StyledContainer>
  );
};

export default FeedbackScreen;
