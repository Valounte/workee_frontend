import React from 'react';

import { useSelector } from 'react-redux';
import { useAsync } from 'react-use';

import { MainNavigation } from '@common-features/main-navigation/MainNavigation';
import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { styled, Container, Stack } from '@ui-kit';

import { getDailyFeedbackThunk } from '@entities/dailyFeedback/store/thunks/getDailyFeedback.thunk';
import { useAppDispatch } from '../../store/useAppDispatch';
import { DailyFeedbackDataGrid } from './features/DailyFeedbackDataGrid';

const StyledContainer = styled(Container)`
  max-width: 100% !important;
  padding: 0 !important;
`;

const FeedbackScreen = () => {
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);
  const { loading: loadingDailyFeedback, error: errorDailyFeedback } = useAsync(() =>
  dispatch(getDailyFeedbackThunk({ teamId: 1, token }))
);
    return (
        <StyledContainer>
          <DailyFeedbackDataGrid loading={loadingDailyFeedback} error={errorDailyFeedback} />
          <Stack direction="row" height="100vh" spacing={0}>
            <MainNavigation />
          </Stack>
        </StyledContainer>
      );
};

export default FeedbackScreen; 