import React, { useEffect } from 'react';

import { unwrapResult } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

import { selectToken } from '@entities/authentification/store/selectors/selectToken.selector';
import { getCurrentHumidityThunk } from '@entities/environment-metrics/humidity/current/store/thunks/getCurrentHumidity.thunk';
import { getCurrentLuminosityThunk } from '@entities/environment-metrics/luminosity/current/store/thunks/getCurrentLuminosity.thunk';
import { getCurrentSoundThunk } from '@entities/environment-metrics/sound/current/store/thunks/getCurrentSound.thunk';
import { getCurrentTemperatureThunk } from '@entities/environment-metrics/temperature/current/store/thunks/getCurrentTemperature.thunk';
import { styled, Typography } from '@ui-kit';
import { useAppDispatch } from 'src/store/useAppDispatch';

import { EnvironmentMetrics } from './features/EnvironmentMetrics';

const StyledContainer = styled.div`
    margin: 0;
    background-color: #f3f3f3;
    height: 100%;
    width: 100%;
`;

const StyledTitle = styled(Typography)`
    margin-top: 18px;
    margin-left: 29px;
`;

const StyledSubTitle = styled(Typography)`
    margin-left: 29px;
`;

export const DashboardScreen = () => {
    const token = useSelector(selectToken);
    const dispatch = useAppDispatch();

    useEffect(() => {
        fetchQuote();
        const myInterval = setInterval(fetchQuote, 60000);
    
        return () => {
          // should clear the interval when the component unmounts
          clearInterval(myInterval);
        };
      });

      const fetchQuote = () => {
        dispatch(getCurrentHumidityThunk({ token }))
          .then(() => unwrapResult)
          .catch(() => {
            console.log('error');
          });
    
        dispatch(getCurrentLuminosityThunk({ token }))
          .then(() => unwrapResult)
          .catch(() => {
            console.log('error');
          });
    
        dispatch(getCurrentSoundThunk({ token }))
          .then(() => unwrapResult)
          .catch(() => {
            console.log('error');
          });
    
        dispatch(getCurrentTemperatureThunk({ token }))
          .then(() => unwrapResult)
          .catch(() => {
            console.log('error');
          });
      };

    return (
        <StyledContainer>
            <StyledTitle variant='h4'>Dashboard</StyledTitle>
            <StyledSubTitle variant='body1'>Voici une synthèse de votre activité</StyledSubTitle>
            <EnvironmentMetrics />
        </StyledContainer>
    );
};

export default DashboardScreen;
