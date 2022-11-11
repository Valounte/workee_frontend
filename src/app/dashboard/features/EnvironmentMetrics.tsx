import React from 'react';

import { useSelector } from 'react-redux';

import { selectCurrentHumidity } from '@entities/environment-metrics/humidity/current/store/selectors/selectCurrentHumidityselector';
import { selectCurrentLuminosity } from '@entities/environment-metrics/luminosity/current/store/selectors/selectCurrentLuminosity.selector';
import { selectCurrentSound } from '@entities/environment-metrics/sound/current/store/selectors/selectCurrentSound.selector';
import { selectCurrentTemperature } from '@entities/environment-metrics/temperature/current/store/selectors/selectCurrentTemperature.selector';
import {
  Card,
  Grid,
  LuminosityIcon,
  SoundIcon,
  ThermometerIcon,
  Stack,
  styled,
  Typography,
  HumidityIcon,
  Divider,
} from '@ui-kit';

const StyledContainer = styled.div`
  margin-top: 44px;
  margin-left: 29px;
  margin-right: 29px;
`;

const StyledCard = styled(Card)`
  height: 180px;
`;

const StyledDataBox = styled.div`
  width: 57%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const IconBox = styled.div`
  width: 33%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EnvironmentMetrics = () => {
  const currentHumidity = useSelector(selectCurrentHumidity);
  const currentTemperature = useSelector(selectCurrentTemperature);
  const currentLuminosity = useSelector(selectCurrentLuminosity);
  const currentSound = useSelector(selectCurrentSound);

  return (
    <StyledContainer>
      <Grid container spacing={3}>
        <Grid item md={3} xs={6}>
          <StyledCard>
            <Stack
              direction="row"
              alignItems="center"
              alignContent="center"
              divider={<Divider orientation="vertical" flexItem />}
              style={{ minHeight: '100%' }}>
              <IconBox>
                <ThermometerIcon fontSize="80" />
              </IconBox>
              <StyledDataBox>
                <Typography variant="h5">Température</Typography>
                {currentTemperature.value ? (
                  <Typography variant="h4">{currentTemperature.value}°C</Typography>
                ) : (
                  <Typography variant="body2">pas de données</Typography>
                )}
              </StyledDataBox>
            </Stack>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard>
            <Stack
              direction="row"
              alignItems="center"
              alignContent="center"
              divider={<Divider orientation="vertical" flexItem />}
              style={{ minHeight: '100%' }}>
              <IconBox>
                <HumidityIcon fontSize="80" />
              </IconBox>
              <StyledDataBox>
                <Typography variant="h5">Humidité</Typography>
                <Typography variant="h4">
                  {currentHumidity.value ? (
                    <Typography variant="h4">{currentHumidity.value}%</Typography>
                  ) : (
                    <Typography variant="body2">pas de données</Typography>
                  )}
                </Typography>
              </StyledDataBox>
            </Stack>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard>
            <Stack
              direction="row"
              alignItems="center"
              alignContent="center"
              divider={<Divider orientation="vertical" flexItem />}
              style={{ minHeight: '100%' }}>
              <IconBox>
                <SoundIcon fontSize="80" />
              </IconBox>
              <StyledDataBox>
                <Typography variant="h5">Son ambiant</Typography>
                <Typography variant="h4">
                  {currentSound.value ? (
                    <Typography variant="h4">{currentSound.value}dB</Typography>
                  ) : (
                    <Typography variant="body2">pas de données</Typography>
                  )}
                </Typography>
              </StyledDataBox>
            </Stack>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard>
            <Stack
              direction="row"
              alignItems="center"
              alignContent="center"
              divider={<Divider orientation="vertical" flexItem />}
              style={{ minHeight: '100%' }}>
              <IconBox>
                <LuminosityIcon fontSize="80" />
              </IconBox>
              <StyledDataBox>
                <Typography variant="h5">Luminosité</Typography>
                <Typography variant="h4">
                  {currentLuminosity.value ? (
                    <Typography variant="h4">{currentLuminosity.value}lx</Typography>
                  ) : (
                    <Typography variant="body2">pas de données</Typography>
                  )}
                </Typography>
              </StyledDataBox>
            </Stack>
          </StyledCard>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};
