import React from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { MainNavigation } from '@common-features/main-navigation/MainNavigation';
import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { RoutesEnum } from '@entities/RoutesEnum';
import { styled, Container, Stack } from '@ui-kit';

import { EnvironmentMetrics } from './features/EnvironmentMetrics';

const StyledContainer = styled(Container)`
  max-width: 100% !important;
  padding: 0 !important;
`;

const EnvironmentMetricsScreen = () => {
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  if (!token) {
    // TODO: rediriger plutot sur la page "tu n'as pas access a cette page"
    navigate(RoutesEnum.login);
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
