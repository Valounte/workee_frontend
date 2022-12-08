import React from 'react';

import { useSelector } from 'react-redux';

import { selectCurrentHumidity } from '@entities/environment-metrics/humidity/current/store/selectors/selectCurrentHumidityselector';
import { selectCurrentLuminosity } from '@entities/environment-metrics/luminosity/current/store/selectors/selectCurrentLuminosity.selector';
import { selectCurrentSound } from '@entities/environment-metrics/sound/current/store/selectors/selectCurrentSound.selector';
import { selectCurrentTemperature } from '@entities/environment-metrics/temperature/current/store/selectors/selectCurrentTemperature.selector';
import {
  Card,
  Grid,
  Box,
  LuminosityIcon,
  SoundIcon,
  ThermometerIcon,
  Stack,
  Typography,
  HumidityIcon,
  Divider,
  styled,
} from '@ui-kit';

const StyledBox = styled(Box)`
  background: #bf360c;
  width: 30%;
  display: flex;
  justifycontent: center;
  padding: 16px;
`;

export const EnvironmentMetrics = () => {
  const currentHumidity = useSelector(selectCurrentHumidity);
  const currentTemperature = useSelector(selectCurrentTemperature);
  const currentLuminosity = useSelector(selectCurrentLuminosity);
  const currentSound = useSelector(selectCurrentSound);

  return (
    <Grid container item spacing={1} md={12} xs={12}>
      <Grid item md={3} xs={6}>
        <Card>
          <Stack
            direction="row"
            alignItems="center"
            alignContent="center"
            divider={<Divider orientation="vertical" flexItem />}>
            <StyledBox>
              <ThermometerIcon fontSize="60" color="white" />
            </StyledBox>
            <Box width="70%" pl={2}>
              <Typography variant="h5" display={{ sm: 'flex', xs: 'none' }}>
                Température
              </Typography>
              {currentTemperature.value ? (
                <Typography variant="h4">{currentTemperature.value}°C</Typography>
              ) : (
                <Typography variant="body2">pas de données</Typography>
              )}
            </Box>
          </Stack>
        </Card>
      </Grid>
      <Grid item md={3} xs={6}>
        <Card>
          <Stack
            direction="row"
            alignItems="center"
            alignContent="center"
            divider={<Divider orientation="vertical" flexItem />}>
            <StyledBox>
              <HumidityIcon fontSize="60" color="white" />
            </StyledBox>
            <Box width="70%" pl={2}>
              <Typography variant="h5" display={{ sm: 'flex', xs: 'none' }}>
                Humidité
              </Typography>
              <Typography variant="h4">
                {currentHumidity.value ? (
                  <Typography variant="h4">{currentHumidity.value}%</Typography>
                ) : (
                  <Typography variant="body2">pas de données</Typography>
                )}
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Grid>
      <Grid item md={3} xs={6}>
        <Card>
          <Stack
            direction="row"
            alignItems="center"
            alignContent="center"
            divider={<Divider orientation="vertical" flexItem />}>
            <StyledBox>
              <SoundIcon fontSize="60" color="white" />
            </StyledBox>
            <Box width="70%" pl={2}>
              <Typography variant="h5" display={{ sm: 'flex', xs: 'none' }}>
                Son ambiant
              </Typography>
              <Typography variant="h4">
                {currentSound.value ? (
                  <Typography variant="h4">{currentSound.value}dB</Typography>
                ) : (
                  <Typography variant="body2">pas de données</Typography>
                )}
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Grid>
      <Grid item md={3} xs={6}>
        <Card>
          <Stack
            direction="row"
            alignItems="center"
            alignContent="center"
            divider={<Divider orientation="vertical" flexItem />}>
            <StyledBox>
              <LuminosityIcon fontSize="60" color="white" />
            </StyledBox>
            <Box width="70%" pl={2}>
              <Typography variant="h5" display={{ sm: 'flex', xs: 'none' }}>
                Luminosité
              </Typography>
              <Typography variant="h4">
                {currentLuminosity.value ? (
                  <Typography variant="h4">{currentLuminosity.value}lx</Typography>
                ) : (
                  <Typography variant="body2">pas de données</Typography>
                )}
              </Typography>
            </Box>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  );
};
