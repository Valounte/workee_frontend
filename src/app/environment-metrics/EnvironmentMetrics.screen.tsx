import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useAsync } from 'react-use';

import { MainNavigation } from '@common-features/main-navigation/MainNavigation';
import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
// import { getMeThunk } from '@entities/me/store/thunks/getMe.thunk';
import { styled, Container, Stack } from '@ui-kit';
// import { useAppDispatch } from 'src/store/useAppDispatch';

import { MainRoutesEnum } from '../../RoutesEnum';
import { MainAppRoutesEnum } from '../MainAppRoutesEnum';
import { EnvironmentMetrics } from './features/EnvironmentMetrics';

const StyledContainer = styled(Container)`
  max-width: 100% !important;
  padding: 0 !important;
`;

const EnvironmentMetricsScreen = () => {
  const token = useSelector(selectToken);
  // const dispatch = useAppDispatch();
  // useAsync(() => dispatch(getMeThunk({ token })));
  const navigate = useNavigate();

  if (!token) {
    // TODO: rediriger plutot sur la page "tu n'as pas access a cette page"
    navigate(`${MainRoutesEnum.app}${MainAppRoutesEnum.login}`);
  }
  return (
    <StyledContainer>
      <Stack direction="row" height="100vh" spacing={0}>
        <MainNavigation />
        <EnvironmentMetrics />
      </Stack>
    </StyledContainer>
  );
};

export default EnvironmentMetricsScreen;
